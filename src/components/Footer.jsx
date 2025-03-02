const Footer = () => {
  return (
<footer className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="col-span-2">
            
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <ul className="flex space-x-4">
              <li><a href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="https://linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};
// const Footer = () => {
//     return (
//         <h1>hi</h1>
//     );
// };

export default Footer;
