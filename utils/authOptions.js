import connectDB from "@/config/database"
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google"



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "email profile",
        },
        // params: 'consent',
        access_type: 'offline',
        response_type: 'code'
      }
    }),
    // ...add more providers here
  ],
  // debug: true, 
  callbacks: {
    //Invoked on successful sign in
    async signIn({ user }) {
      await connectDB();
      try {
        const {email, name, image} = user
        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
          // Create new user
          await User.create({
            username: name,
            email,
            image,
          });
        }

        return true; // Allow sign-in
      } catch (error) {
        console.error("Error saving user:", error);
        return false; // Deny sign-in on error
      }
    },
    //session
    async session({ session }) {
      await connectDB();
      
      // Ensure session has user email before querying the database
      if (!session.user?.email) {
        console.error("Session email is missing:", session);
        return session;
      }

      const user = await User.findOne({ email: session.user.email });
      
      if (!user) {
        console.error("User not found in database:", session.user.email);
        return session;
      }

      // Attach user ID to session
      session.user.id = user._id.toString();
      return session;
    },
  }
}
