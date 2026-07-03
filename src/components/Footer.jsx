function Footer() {
  return (
    <footer className="border-t mt-10 px-10 py-8 text-sm text-gray-600 dark:text-gray-300">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:underline">Help Centre</li>
            <li className="cursor-pointer hover:underline">AirCover</li>
            <li className="cursor-pointer hover:underline">Anti-discrimination</li>
            <li className="cursor-pointer hover:underline">Disability support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Hosting</h4>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:underline">Airbnb your home</li>
            <li className="cursor-pointer hover:underline">AirCover for Hosts</li>
            <li className="cursor-pointer hover:underline">Hosting resources</li>
            <li className="cursor-pointer hover:underline">Community forum</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Airbnb</h4>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:underline">Newsroom</li>
            <li className="cursor-pointer hover:underline">New features</li>
            <li className="cursor-pointer hover:underline">Careers</li>
            <li className="cursor-pointer hover:underline">Investors</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">About this clone</h4>
          <ul className="space-y-2">
            <li>Built with React + Tailwind CSS</li>
            <li>UI components by ShadCN</li>
            <li>Made by Anshika</li>
          </ul>
        </div>

      </div>

      <div className="border-t mt-6 pt-4 text-xs text-gray-500 dark:text-gray-400">
        © 2026 Airbnb Clone. This is a practice project for internship purposes, not affiliated with Airbnb.
      </div>
    </footer>
  );
}

export default Footer;