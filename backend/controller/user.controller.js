import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    let { fullname, email, password, confirmpassword } = req.body;

    // Convert to strings to avoid bcrypt errors
    fullname = String(fullname);
    email = String(email);
    password = String(password);
    confirmpassword = String(confirmpassword);

    // Validate required fields
    if (!fullname || !email || !password || !confirmpassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check password match
    if (password !== confirmpassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save only hashed password (not confirm password)
    const newUser = new User({ fullname, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' ,user: {
      id: newUser._id,      
      fullname: newUser.fullname,
      email: newUser.email  
    }});
    
  } catch (error) {
    console.error('Signup error:', error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' ,user:{
        id:user._id,
        fullname:user.fullname,
        email:user.email
    }});
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
}