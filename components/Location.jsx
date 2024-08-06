import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function State() {
    return (
        <Autocomplete
            sx={{ width: 300 }} // width of widget
            options={ states } // locations to choose from
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box
                        key={key}
                        component="li"
                        {...optionProps}
                    >
                        {option.name} ({option.abbreviation})
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose your state" // title of widget
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

// from https://freetestapi.com/api/v1/us-states
const states = [
    {
        "id": 1,
        "name": "Alabama",
        "abbreviation": "AL",
        "capital": "Montgomery",
        "largest_city": "Birmingham",
        "population": 5024279,
        "area_sq_miles": 52420,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 2,
        "name": "Alaska",
        "abbreviation": "AK",
        "capital": "Juneau",
        "largest_city": "Anchorage",
        "population": 731545,
        "area_sq_miles": 663267,
        "time_zone": "Alaska Time Zone"
    },
    {
        "id": 3,
        "name": "Arizona",
        "abbreviation": "AZ",
        "capital": "Phoenix",
        "largest_city": "Phoenix",
        "population": 7158024,
        "area_sq_miles": 113990,
        "time_zone": "Mountain Time Zone"
    },
    {
        "id": 4,
        "name": "Arkansas",
        "abbreviation": "AR",
        "capital": "Little Rock",
        "largest_city": "Little Rock",
        "population": 3017825,
        "area_sq_miles": 53179,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 5,
        "name": "California",
        "abbreviation": "CA",
        "capital": "Sacramento",
        "largest_city": "Los Angeles",
        "population": 39538223,
        "area_sq_miles": 163695,
        "time_zone": "Pacific Time Zone"
    },
    {
        "id": 6,
        "name": "Colorado",
        "abbreviation": "CO",
        "capital": "Denver",
        "largest_city": "Denver",
        "population": 5773714,
        "area_sq_miles": 104094,
        "time_zone": "Mountain Time Zone"
    },
    {
        "id": 7,
        "name": "Connecticut",
        "abbreviation": "CT",
        "capital": "Hartford",
        "largest_city": "Bridgeport",
        "population": 3605944,
        "area_sq_miles": 5543,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 8,
        "name": "Delaware",
        "abbreviation": "DE",
        "capital": "Dover",
        "largest_city": "Wilmington",
        "population": 989948,
        "area_sq_miles": 1954,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 9,
        "name": "Florida",
        "abbreviation": "FL",
        "capital": "Tallahassee",
        "largest_city": "Jacksonville",
        "population": 21538187,
        "area_sq_miles": 65757,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 10,
        "name": "Georgia",
        "abbreviation": "GA",
        "capital": "Atlanta",
        "largest_city": "Atlanta",
        "population": 10711908,
        "area_sq_miles": 59425,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 11,
        "name": "Hawaii",
        "abbreviation": "HI",
        "capital": "Honolulu",
        "largest_city": "Honolulu",
        "population": 1415872,
        "area_sq_miles": 10932,
        "time_zone": "Hawaii-Aleutian Time Zone"
    },
    {
        "id": 12,
        "name": "Idaho",
        "abbreviation": "ID",
        "capital": "Boise",
        "largest_city": "Boise",
        "population": 1826156,
        "area_sq_miles": 83569,
        "time_zone": "Mountain Time Zone"
    },
    {
        "id": 13,
        "name": "Illinois",
        "abbreviation": "IL",
        "capital": "Springfield",
        "largest_city": "Chicago",
        "population": 12812508,
        "area_sq_miles": 57918,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 14,
        "name": "Indiana",
        "abbreviation": "IN",
        "capital": "Indianapolis",
        "largest_city": "Indianapolis",
        "population": 6790280,
        "area_sq_miles": 36418,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 15,
        "name": "Iowa",
        "abbreviation": "IA",
        "capital": "Des Moines",
        "largest_city": "Des Moines",
        "population": 3190369,
        "area_sq_miles": 56272,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 16,
        "name": "Kansas",
        "abbreviation": "KS",
        "capital": "Topeka",
        "largest_city": "Wichita",
        "population": 2913314,
        "area_sq_miles": 82278,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 17,
        "name": "Kentucky",
        "abbreviation": "KY",
        "capital": "Frankfort",
        "largest_city": "Louisville",
        "population": 4499692,
        "area_sq_miles": 40408,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 18,
        "name": "Louisiana",
        "abbreviation": "LA",
        "capital": "Baton Rouge",
        "largest_city": "New Orleans",
        "population": 4645184,
        "area_sq_miles": 52378,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 19,
        "name": "Maine",
        "abbreviation": "ME",
        "capital": "Augusta",
        "largest_city": "Portland",
        "population": 1345790,
        "area_sq_miles": 35380,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 20,
        "name": "Maryland",
        "abbreviation": "MD",
        "capital": "Annapolis",
        "largest_city": "Baltimore",
        "population": 6083116,
        "area_sq_miles": 12406,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 21,
        "name": "Massachusetts",
        "abbreviation": "MA",
        "capital": "Boston",
        "largest_city": "Boston",
        "population": 6976597,
        "area_sq_miles": 10554,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 22,
        "name": "Michigan",
        "abbreviation": "MI",
        "capital": "Lansing",
        "largest_city": "Detroit",
        "population": 10045029,
        "area_sq_miles": 96714,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 23,
        "name": "Minnesota",
        "abbreviation": "MN",
        "capital": "Saint Paul",
        "largest_city": "Minneapolis",
        "population": 5700671,
        "area_sq_miles": 86936,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 24,
        "name": "Mississippi",
        "abbreviation": "MS",
        "capital": "Jackson",
        "largest_city": "Jackson",
        "population": 2989260,
        "area_sq_miles": 48430,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 25,
        "name": "Missouri",
        "abbreviation": "MO",
        "capital": "Jefferson City",
        "largest_city": "Kansas City",
        "population": 6169270,
        "area_sq_miles": 69707,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 26,
        "name": "Montana",
        "abbreviation": "MT",
        "capital": "Helena",
        "largest_city": "Billings",
        "population": 1086759,
        "area_sq_miles": 147040,
        "time_zone": "Mountain Time Zone"
    },
    {
        "id": 27,
        "name": "Nebraska",
        "abbreviation": "NE",
        "capital": "Lincoln",
        "largest_city": "Omaha",
        "population": 1953038,
        "area_sq_miles": 77348,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 28,
        "name": "Nevada",
        "abbreviation": "NV",
        "capital": "Carson City",
        "largest_city": "Las Vegas",
        "population": 3138259,
        "area_sq_miles": 110572,
        "time_zone": "Pacific Time Zone"
    },
    {
        "id": 29,
        "name": "New Hampshire",
        "abbreviation": "NH",
        "capital": "Concord",
        "largest_city": "Manchester",
        "population": 1371246,
        "area_sq_miles": 9349,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 30,
        "name": "New Jersey",
        "abbreviation": "NJ",
        "capital": "Trenton",
        "largest_city": "Newark",
        "population": 8936574,
        "area_sq_miles": 8723,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 31,
        "name": "New Mexico",
        "abbreviation": "NM",
        "capital": "Santa Fe",
        "largest_city": "Albuquerque",
        "population": 2117522,
        "area_sq_miles": 121590,
        "time_zone": "Mountain Time Zone"
    },
    {
        "id": 32,
        "name": "New York",
        "abbreviation": "NY",
        "capital": "Albany",
        "largest_city": "New York City",
        "population": 19440469,
        "area_sq_miles": 54555,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 33,
        "name": "North Carolina",
        "abbreviation": "NC",
        "capital": "Raleigh",
        "largest_city": "Charlotte",
        "population": 10611862,
        "area_sq_miles": 53819,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 34,
        "name": "North Dakota",
        "abbreviation": "ND",
        "capital": "Bismarck",
        "largest_city": "Fargo",
        "population": 761723,
        "area_sq_miles": 70698,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 35,
        "name": "Ohio",
        "abbreviation": "OH",
        "capital": "Columbus",
        "largest_city": "Columbus",
        "population": 11689100,
        "area_sq_miles": 44826,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 36,
        "name": "Oklahoma",
        "abbreviation": "OK",
        "capital": "Oklahoma City",
        "largest_city": "Oklahoma City",
        "population": 3956971,
        "area_sq_miles": 69898,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 37,
        "name": "Oregon",
        "abbreviation": "OR",
        "capital": "Salem",
        "largest_city": "Portland",
        "population": 4217737,
        "area_sq_miles": 98381,
        "time_zone": "Pacific Time Zone"
    },
    {
        "id": 38,
        "name": "Pennsylvania",
        "abbreviation": "PA",
        "capital": "Harrisburg",
        "largest_city": "Philadelphia",
        "population": 12801989,
        "area_sq_miles": 46055,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 39,
        "name": "Rhode Island",
        "abbreviation": "RI",
        "capital": "Providence",
        "largest_city": "Providence",
        "population": 1059361,
        "area_sq_miles": 1545,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 40,
        "name": "South Carolina",
        "abbreviation": "SC",
        "capital": "Columbia",
        "largest_city": "Charleston",
        "population": 5218040,
        "area_sq_miles": 32020,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 41,
        "name": "South Dakota",
        "abbreviation": "SD",
        "capital": "Pierre",
        "largest_city": "Sioux Falls",
        "population": 903027,
        "area_sq_miles": 77116,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 42,
        "name": "Tennessee",
        "abbreviation": "TN",
        "capital": "Nashville",
        "largest_city": "Nashville",
        "population": 6897576,
        "area_sq_miles": 42144,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 43,
        "name": "Texas",
        "abbreviation": "TX",
        "capital": "Austin",
        "largest_city": "Houston",
        "population": 29472295,
        "area_sq_miles": 268596,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 44,
        "name": "Utah",
        "abbreviation": "UT",
        "capital": "Salt Lake City",
        "largest_city": "Salt Lake City",
        "population": 3282115,
        "area_sq_miles": 84897,
        "time_zone": "Mountain Time Zone"
    },
    {
        "id": 45,
        "name": "Vermont",
        "abbreviation": "VT",
        "capital": "Montpelier",
        "largest_city": "Burlington",
        "population": 623347,
        "area_sq_miles": 9615,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 46,
        "name": "Virginia",
        "abbreviation": "VA",
        "capital": "Richmond",
        "largest_city": "Virginia Beach",
        "population": 8535519,
        "area_sq_miles": 42775,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 47,
        "name": "Washington",
        "abbreviation": "WA",
        "capital": "Olympia",
        "largest_city": "Seattle",
        "population": 7693612,
        "area_sq_miles": 71298,
        "time_zone": "Pacific Time Zone"
    },
    {
        "id": 48,
        "name": "West Virginia",
        "abbreviation": "WV",
        "capital": "Charleston",
        "largest_city": "Charleston",
        "population": 1805832,
        "area_sq_miles": 24230,
        "time_zone": "Eastern Time Zone"
    },
    {
        "id": 49,
        "name": "Wisconsin",
        "abbreviation": "WI",
        "capital": "Madison",
        "largest_city": "Milwaukee",
        "population": 5807406,
        "area_sq_miles": 65498,
        "time_zone": "Central Time Zone"
    },
    {
        "id": 50,
        "name": "Wyoming",
        "abbreviation": "WY",
        "capital": "Cheyenne",
        "largest_city": "Cheyenne",
        "population": 577601,
        "area_sq_miles": 97813,
        "time_zone": "Mountain Time Zone"
    }
];
