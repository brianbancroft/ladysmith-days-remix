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
    },
    { 
      name: 'Eagles Ladies Auxillary 2101',
      imageClassname: 'bg-sponsor-eagles-ladies',
    },
    {
      name: 'Kinsmen',
      imageClassname: 'bg-sponsor-kinsmen',
    },
    // { name: 'John Surtes - Moving Properties', text: true, specialEvent: true },

    {
      name: 'Ladysmith Eagles Aerie 2101',
      imageClassname: 'bg-sponsor-eagles',
    },
    {
      name: 'Bethel Church',
      imageClassname: 'bg-sponsor-bethel',
      darkBackground: true,
    },
    // {
    //   name: 'Mactier Real Estate Group',
    //   text: true,
    //   copy: 'Financial asssitance for soap box',
    //   specialEvent: true,
    // },

    {
      name: 'Country Grocer',
      imageClassname: 'bg-sponsor-countrygrocer',
    },

    // {
    //   name: 'Dens Auto Collision',
    //   imageClassname: 'bg-sponsor-dens',
    //   specialEvent: true,
    // },
    {
      name: 'FMI',
      imageClassname: 'bg-sponsor-fmi',
      
    },
    {
      name: 'Bayview Brewery',
      imageClassname: 'bg-sponsor-bayview',
      copy: 'They gave us money and a place to do the promos',
    },
    {
      name: 'Coastal Trucking',
      imageClassname: 'bg-sponsor-coastaltrucking',
      copy: 'For providing the climbing wall',
    },
  ],
  silver: [
    {
      name: 'Save on Foods',
      imageClassname: 'bg-sponsor-save-on-foods',
    },
    // {
    //   name: 'Robson O’Connor, LLP Law Offices',
    //   text: true,
    // },
    
    // {
    //   name: 'Tall Tree Timber',
    //   text: true,
    // },


    {
      name: 'Great Canadian Dollar Store',
      imageClassname: 'bg-sponsor-dollarstore',
      copy: 'Material and logistics support, including supplies for the craft and activity tables',
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
      name: 'Home Hardware',
      copy: 'For leading the nail driving competition, as well as providing many of our prizes',
      imageClassname: 'bg-sponsor-homehardware',
    }, 
    {
      name: 'Cupe 606',
      imageClassname: 'bg-sponsor-cupe',
      copy: 'Financial support for the childrens entertainment',
    },
  ],
  bronze: [
    // {
    //   name: 'A&W',
    //   imageClassname: 'bg-sponsor-aw',
    //   specialEvent: true,
    // },
    // {
    //   name: 'Connect Hearing',
    //   text: true,
    // },
   
    {
      name: 'Otter Point Marina',
      text: true,
    },

    // {
    //   name: 'Ladysmith Community Marina',
    //   copy: 'For providing the facilities used by the Bullhead Derby',
    //   imageClassname: 'bg-sponsor-maritime-society',
    // },
    // { name: 'IDA Ladysmith', imageClassname: 'bg-sponsor-ida' },
    { name: 'Bayview Framing', imageClassname: 'bg-sponsor-bayview-framing' },
    { name: 'GFL', imageClassname: 'bg-sponsor-gfl' },
    // {
    //   name: 'Ladysmith Chamber of Commerce',
    //   imageClassname: 'bg-sponsor-chamber',
    //   copy: '',
    // },
    // { name: 'Old Town Bakery', imageClassname: 'bg-sponsor-oldtownbakery' },
    // { name: 'Panago Pizza', imageClassname: 'bg-sponsor-panago' },
    // { name: 'The Chronicle', imageClassname: 'bg-sponsor-chronicle' },
    // { name: 'Liam Tromans', text: true, copy: '' },
    {
      name: 'Otter Point Timber',
      text: true,
      copy: 'They supply the greasy pole pole',
    },

    // {
    //   name: 'Little Valley Restoration',
    //   imageClassname: 'bg-sponsor-little-valley',
    //   copy: 'Financial asssitance for soap box',
    //   specialEvent: true,
    // },
  ],
}

function SectionGratitude() {
  return (
    <section className="my-8">
      <div className="rounded-xl bg-ld-yellow p-4">
        <h3 className="text-center font-heading text-2xl font-semibold text-ld-dark-blue">
          Main sponsors
        </h3>
      </div>

      {sponsorList.main.map(content => (
        <SponsorGold key={content.name} {...content} />
      ))}

      <div className="bg-ld-yellow p-4">
        <h3 className="text-center font-heading text-2xl font-semibold text-ld-dark-blue">
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
        <h3 className="text-center font-heading text-2xl font-semibold text-ld-dark-blue">
          Silver sponsors
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-2 px-6 lg:grid-cols-3">
        {sponsorList.silver.map(item => (
          <SponsorSilver key={item.name} {...item} />
        ))}
      </div>

      <div className="bg-ld-yellow p-4">
        <h3 className="text-center font-heading text-2xl font-semibold text-ld-dark-blue">
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
