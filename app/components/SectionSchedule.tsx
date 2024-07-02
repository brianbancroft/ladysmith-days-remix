export function SectionSchedule() {
  return (
    <>
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 -rotate-1 transform bg-ld-green p-6 shadow-lg">
          <h1 className="my-3 font-heading text-4xl font-bold text-ld-yellow">
            2024 SCHEDULE
          </h1>
        </div>

        <h2 className="mb-1 font-heading text-2xl font-semibold text-red-500">
          SATURDAY
        </h2>

        <h3 className="mb-2 text-xl font-semibold text-red-500">
          OYSTER BAY MARINA
        </h3>
        <ul className="mb-4 list-inside list-disc">
          <li className="text-ld-dark-blue">BULLHEAD DERBY | 7 - 9 AM</li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold text-red-500">
          DOWNTOWN 1<sup>ST</sup> AVE
        </h3>
        <ul className="mb-4 list-inside list-disc">
          <li className="text-ld-dark-blue">SOAP BOX DERBY | 10 AM</li>
          <li className="text-ld-dark-blue">SKATEBOARD DEMO | 10 AM</li>
          <li className="text-ld-dark-blue">
            BEER GARDEN & LIVE MUSIC | 11 AM
          </li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold text-red-500">
          TRANSFER BEACH
        </h3>
        <ul className="mb-4 list-inside list-disc">
          <li className="text-ld-dark-blue">FOOD & MERCHANDISE VENDORS</li>
          <li className="text-ld-dark-blue">BEER GARDEN</li>
          <li className="font-semibold text-ld-dark-blue">
            LADYSMITH DAYS EXPO | 10 AM - 2 PM
          </li>
          <li className="text-ld-dark-blue">OLD TIME GAMES | 12 PM</li>
          <li className="text-ld-dark-blue">
            IAN JOHNSTONE | 12:30 PM & 1:30 PM
          </li>
          <li className="text-ld-dark-blue">
            KIDS CRAFTS TABLE | 12 PM - 4 PM
          </li>
          <li className="text-ld-dark-blue">NAIL DRIVING CONTEST | 1 PM</li>
          <li className="text-ld-dark-blue">ZUCCHINI RACES | 2 PM</li>
          <li className="text-ld-dark-blue">GREASY POLE COMPETITION | 3 PM</li>
          <li className="text-ld-dark-blue">
            WATERMELON EATING CONTEST | 3 PM
          </li>
          <li className="font-semibold text-ld-dark-blue">
            PROFESSIONAL WRESTLING featuring VIPW | 5:15 PM
          </li>
        </ul>

        <h2 className="mb-1 mt-4 font-heading text-2xl font-semibold text-purple-500">
          SUNDAY
        </h2>

        <h3 className="mb-2 text-xl font-semibold text-purple-500">
          TRANSFER BEACH
        </h3>
        <ul className="mb-4 list-inside list-disc">
          <li className="text-ld-dark-blue">FOOD VENDORS</li>
          <li className="font-semibold text-ld-dark-blue">
            LDCU KIDS FUN ZONE | 11 AM
          </li>
          <li className="text-ld-dark-blue">CLIMBING WALL | 11 AM</li>
        </ul>
      </div>

      <div className="relative bottom-3 mx-auto md:w-3/4">
        <div className="-rotate-1 transform bg-ld-yellow p-6 shadow-lg">
          <h3 className="mb-2 text-2xl font-bold text-ld-dark-blue">
            <span className="font-heading text-3xl">
              MID-ISLAND CO-OP BANDS ON THE BEACH{' '}
            </span>
            | STARTS AT 12:30 PM
          </h3>
          <p className="mb-2 text-lg font-light text-ld-purple">FEATURING</p>
          <ul className="mb-4 space-y-1 text-xl font-semibold text-ld-purple">
            <li>STEPHANIE ROTH PERFORMING ARTS STUDIO • PEACE, LOVE AND JOY</li>
            <li>
              SARAH LEO • SOL ARAVENA • PROJECT FLAMENCO • BANDS ON THE BEACH
            </li>
            <li>
              DOCTORS + BARSBY SCHOOL OF ROCK • LINE DANCING WITH TAILGATE
            </li>
          </ul>
          <p className="my-3 text-lg font-light text-blue-600">
            CITIZEN OF THE YEAR PRESENTATION
          </p>
          <p className="mb-3 text-2xl font-bold text-ld-purple">
            <span className="text-lg font-light">AND</span> SUNSET STRIP
          </p>
          <p className="my-1 text-2xl font-bold text-blue-600">
            LDCU FIREWORKS STARTING AT 10 PM
          </p>
        </div>
      </div>
    </>
  )
}
