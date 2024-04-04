import {
  SponsorBronze,
  SponsorGold,
  SponsorSilver,
} from '~/components/SponsorBanner'

const sponsorList = {
  main: [
    {
      name: 'Ladysmith and District Credit Union',
      imageClassname: 'bg-sponsor-creditunion',
      copy: 'In addition to providing financial and administrative support for the fireworks and other aspects of the event, Ladysmith and District Credit Union also ran the "Kids\' Count Fun Zone" that took place on Sunday. If your child bounced on a bouncy castle this weekend, thank the Credit Union!',
    },
    {
      name: 'Saltair Marine Services LTD',
      imageClassname: 'bg-sponsor-saltair-marine',
      copy: "For over a generation, Saltair Marine Services has provided a barge and crew that serves as the platform for the town's annual summer fireworks",
    },
    {
      name: 'Town of Ladysmith',
      imageClassname: 'bg-sponsor-townladysmith',
      copy: 'The Town of Ladysmith is a friend of Ladysmith Days. It provides the well-maintained Transfer Beach park that hosts the facilities, as well as in-person support',
    },
    {
      name: 'Mid-Island Co-op',
      imageClassname: 'bg-sponsor-coop',
      copy: 'For generous finanical and promotional support',
    },
    {
      name: 'Great Canadian Dollar Store',
      imageClassname: 'bg-sponsor-dollarstore',
      copy: 'Material and logistics support, including supplies, leadership, and construction of the stage',
    },
  ],
  gold: [
    {
      name: 'Four One One Apparel',
      imageClassname: 'bg-sponsor-411',
      copy: 'For time spent negotiating and $2000 directly towards the wrestling event',
    },
    {
      name: 'Eagles Ladies Auxillary 2101',
      imageClassname: 'bg-sponsor-eagles-ladies',
    },
    {
      name: 'Kinsmen',
      imageClassname: 'bg-sponsor-kinsmen',
    },
    { name: 'John Surtes - Moving Properties', text: true, specialEvent: true },

    {
      name: 'Ladysmith Eagles Aerie 2101',
      imageClassname: 'bg-sponsor-eagles',
    },
    {
      name: 'Bethel Church',
      imageClassname: 'bg-sponsor-bethel',
      darkBackground: true,
    },
    {
      name: 'McDonalds',
      imageClassname: 'bg-sponsor-mcdonalds',
    },
    {
      name: 'Country Grocer',
      imageClassname: 'bg-sponsor-countrygrocer',
    },
    {
      name: 'Hillside Pharmacy',
      imageClassname: 'bg-sponsor-hillside',
    },
    {
      name: 'Dens Auto Collision',
      imageClassname: 'bg-sponsor-dens',
      specialEvent: true,
    },
    {
      name: 'Bayview Brewery',
      imageClassname: 'bg-sponsor-bayview',
      copy: 'They gave us money and a place to do the promos',
    },
  ],
  silver: [
    {
      name: 'Coastal Trucking',
      imageClassname: 'bg-sponsor-coastaltrucking',
      copy: 'For providing the climbing wall',
    },
    {
      name: 'Save on Foods',
      imageClassname: 'bg-sponsor-save-on-foods',
    },
    {
      name: 'Robson O’Connor, LLP Law Offices',
      text: true,
    },
    {
      name: '49th Parallel Grocery',
      imageClassname: 'bg-sponsor-49th',
      copy: 'For hosting their first watermelon eating contest, an instant success',
    },
    {
      name: 'Tall Tree Timber',
      text: true,
    },
    {
      name: 'Yum Yum Baits',
      copy: 'For leading a memorable bullhead derby, sparking the joy of fishing for many families',
      imageClassname: 'bg-sponsor-yum-yum',
    },

    {
      name: 'Great Canadian Dollar Store',
      imageClassname: 'bg-sponsor-dollarstore',
      copy: 'Material and logistics support, including supplies for the craft and activity tables',
    },

    {
      name: 'Market 2 All',
      copy: 'For over a decade of web support and consulting',
      imageClassname: 'bg-sponsor-market2all',
    },

    {
      name: 'Spyder Graphix',
      copy: 'For printing the signage to Ladysmith Days, and other logistical support',
      imageClassname: 'bg-sponsor-spyder-graphix',
    },
    {
      name: 'Anne-Lynn Design',
      imageClassname: 'bg-sponsor-annelynndesign',
      copy: 'For leading craft activities, as well as branding and design management',
    },
    {
      name: 'Pharmasave',
      copy: 'For sponsoring the event and providing storefront for our collectables',
      imageClassname: 'bg-sponsor-pharmasave',
    },
    {
      name: 'Ladysmith Whole Health Pharmacy',
      copy: 'For a donation',
      imageClassname: 'bg-sponsor-wholehealth',
      text: true,
    },
    {
      name: 'Oceanview Community Church',
      copy: 'Assistance with the soap box',
      imageClassname: 'bg-sponsor-oceanview',
      specialEvent: true,
    },
  ],
  bronze: [
    {
      name: 'A&W',
      imageClassname: 'bg-sponsor-aw',
      specialEvent: true,
    },
    {
      name: 'Connect Hearing',
      text: true,
    },
    {
      name: 'Cupe 606',
      imageClassname: 'bg-sponsor-cupe',
      copy: 'Financial support for the childrens entertainment',
    },
    {
      name: 'Home Hardware',
      copy: 'For leading the nail driving competition, as well as providing many of our prizes',
      imageClassname: 'bg-sponsor-homehardware',
    },
    // {
    //   name: 'Ladysmith Community Marina',
    //   copy: 'For providing the facilities used by the Bullhead Derby',
    //   imageClassname: 'bg-sponsor-maritime-society',
    // },
    { name: 'IDA Ladysmith', imageClassname: 'bg-sponsor-ida' },
    { name: 'Bayview Framing', imageClassname: 'bg-sponsor-bayview-framing' },
    { name: 'GFL', imageClassname: 'bg-sponsor-gfl' },
    {
      name: 'Ladysmith Chamber of Commerce',
      imageClassname: 'bg-sponsor-chamber',
      copy: '',
    },
    { name: 'Old Town Bakery', imageClassname: 'bg-sponsor-oldtownbakery' },
    { name: 'Panago Pizza', imageClassname: 'bg-sponsor-panago' },
    // { name: 'The Chronicle', imageClassname: 'bg-sponsor-chronicle' },
    // { name: 'Liam Tromans', text: true, copy: '' },
    {
      name: 'Otter Point Timber',
      text: true,
      copy: 'They supply the greasy pole pole',
    },
    {
      name: 'Mactier Real Estate Group',
      text: true,
      copy: 'Financial asssitance for soap box',
      specialEvent: true,
    },
    {
      name: 'Little Valley Restoration',
      imageClassname: 'bg-sponsor-little-valley',
      copy: 'Financial asssitance for soap box',
      specialEvent: true,
    },
    // In past, they brought the stage
    // {
    //   name: 'Ryler Holdings Ltd',
    //   copy: 'For financial and material support, including transport as well as the stage',
    //   imageClassname: 'bg-sponsor-ryler',
    // },
  ],
}

function SectionGratitude() {
  return (
    <section className="my-8">
      <div className="bg-ld-yellow rounded-xl p-4">
        <h3 className="font-heading text-ld-dark-blue text-center text-2xl font-semibold">
          Main sponsors
        </h3>
      </div>

      {sponsorList.main.map(content => (
        <SponsorGold key={content.name} {...content} />
      ))}

      <div className="bg-ld-yellow p-4">
        <h3 className="font-heading text-ld-dark-blue text-center text-2xl font-semibold">
          Gold sponsors
        </h3>
      </div>

      <div className="grid gap-2 px-6 md:grid-cols-2">
        {sponsorList.gold.map(content => {
          delete content.copy
          return <SponsorGold key={content.name} {...content} />
        })}
      </div>

      <div className="bg-ld-yellow p-4">
        <h3 className="font-heading text-ld-dark-blue text-center text-2xl font-semibold">
          Silver sponsors
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-2 px-6 lg:grid-cols-3">
        {sponsorList.silver.map(item => (
          <SponsorSilver key={item.name} {...item} />
        ))}
      </div>

      <div className="bg-ld-yellow p-4">
        <h3 className="font-heading text-ld-dark-blue text-center text-2xl font-semibold">
          Bronze sponsors
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-2 px-2 lg:grid-cols-4">
        {sponsorList.bronze.map(props => (
          <SponsorBronze key={props.name} {...props} />
        ))}
      </div>
    </section>
  )
}

export default SectionGratitude
