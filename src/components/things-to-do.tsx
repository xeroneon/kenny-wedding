
export default function ThingsToDo() {
  return (
    <section id="things-to-do" className="space-y-4">
      <h2 className="text-3xl font-bold underline underline-offset-4">
        Things to Do
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Tenaya options: swimming, spa, Jackalope's Bar & Grill, shopping</li>
        <li>
          Yosemite National Park (Keep in mind it's a holiday weekend and likely
          to be packed!)
        </li>
        <li>Sugar Pine Railroad</li>
        <li>
          <a
            href="http://www.visittenaya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-yellow-300 hover:text-yellow-400"
          >
            www.visittenaya.com
          </a>
        </li>
      </ul>
    </section>
  );
}
