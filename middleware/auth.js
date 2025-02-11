export default function ({ redirect }) {
  // Check if we are on the client side before accessing localStorage
  if (process.client) {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // Redirect to home page if no token is found
      return redirect('/');
    }
  }
}
