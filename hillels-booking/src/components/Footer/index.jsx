function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4 text-center">
        <p>
          Made with ❤️ by Oleksii Ermantraut from HillelsITShool <br />©{new Date().getFullYear()}{' '}
          HillelsBooking. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
