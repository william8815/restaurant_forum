<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Liliana Doyle",
      tel: "1-358-086-4483 x149",
      address: "5211 Sabrina Park",
      opening_hours: "08:00",
      description: "voluptas enim architecto",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.89737645121869",
      viewCounts: 1,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-07-04T07:58:49.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 2,
      name: "Vern Gerlach",
      tel: "1-461-487-6755 x40839",
      address: "999 Kling Via",
      opening_hours: "08:00",
      description: "et et illum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.37487759535455",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 3,
      name: "Alberta Hayes",
      tel: "775-498-7474 x2966",
      address: "35357 Ortiz Prairie",
      opening_hours: "08:00",
      description: "quis eos aliquid",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.44237452116526",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 4,
      name: "Melany Rowe DVM",
      tel: "1-902-168-9700",
      address: "4984 Brenda Forge",
      opening_hours: "08:00",
      description: "Laborum ad non quos autem quas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.52480496183988",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 5,
      name: "Nathan Beer",
      tel: "(466) 866-6992 x478",
      address: "00853 Steuber Mills",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.319637840017236",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 6,
      name: "Gussie Jaskolski MD",
      tel: "1-781-168-4997 x3104",
      address: "97986 Friesen Mountains",
      opening_hours: "08:00",
      description: "sit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.18263328047849",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 7,
      name: "Ms. Dandre Swaniawski",
      tel: "(147) 476-2115",
      address: "363 Santa Plains",
      opening_hours: "08:00",
      description: "aliquam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.850693587284926",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 8,
      name: "Lavonne Beier",
      tel: "813-490-7735 x83743",
      address: "51601 Green Manor",
      opening_hours: "08:00",
      description:
        "Eum eos distinctio sed eveniet ut at. Sed ut et ducimus. Et ipsum et ipsum ut explicabo eaque quia porro dicta. Iusto voluptate molestiae ut et expedita. Aut laudantium dignissimos dolor quia quasi corporis nobis sed culpa. Ipsum nobis est suscipit placeat est excepturi.\n \rUt ut quia neque voluptatum eos mollitia suscipit. Modi similique labore ratione illo ex qui. Porro cum officiis. Aliquam saepe nemo. Repellat architecto dolorem.\n \rPariatur pariatur praesentium dolorum corrupti ullam error occaecati aut. Animi quibusdam soluta dolores et ipsa qui. Autem nobis quaerat aut consequuntur et. Ea dolores autem voluptates voluptas quisquam laborum tenetur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.60461781203423",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 9,
      name: "Agustin Hauck",
      tel: "1-447-016-0260 x556",
      address: "713 Daryl Road",
      opening_hours: "08:00",
      description:
        "Tempore consequuntur et quia nobis.\nEt et aliquid aut et deserunt provident error quae eaque.\nDolorem consequatur suscipit ab ut consequatur suscipit laboriosam unde nesciunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.76253573784982",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 10,
      name: "Ethel Walsh",
      tel: "1-644-407-9778 x5197",
      address: "0080 Kathryne Forge",
      opening_hours: "08:00",
      description: "Numquam provident inventore saepe officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.291662598731731",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 11,
      name: "Brianne Corwin",
      tel: "(407) 352-7106",
      address: "70694 Hermann Knoll",
      opening_hours: "08:00",
      description:
        "Maiores tempora dolores aspernatur. Vero cum mollitia labore dolorem et. Assumenda iure eos. Ad iste consequatur officiis unde. Sint et aut. Illo eius in.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.689654283396514",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 12,
      name: "Darron Turcotte PhD",
      tel: "955-340-9208",
      address: "2521 Kaylee Villages",
      opening_hours: "08:00",
      description:
        "Sint et quia molestiae deserunt quibusdam corrupti.\nDebitis laudantium delectus quos voluptatibus unde in odit architecto.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.19166935592894",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 13,
      name: "Jermey Shields",
      tel: "839-004-6896 x009",
      address: "5252 Doyle Square",
      opening_hours: "08:00",
      description: "commodi delectus suscipit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.16120018568203",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 14,
      name: "King Jacobs",
      tel: "519-786-0022 x92039",
      address: "1819 Johns Hill",
      opening_hours: "08:00",
      description: "Autem aspernatur velit et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.708271922987596",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 15,
      name: "Nicholas Hane",
      tel: "092.398.6558",
      address: "7885 Van Ways",
      opening_hours: "08:00",
      description: "dolorum laborum officia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.856031080221864",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 16,
      name: "Arthur Stark",
      tel: "1-151-147-6207 x590",
      address: "39545 Hillard Loaf",
      opening_hours: "08:00",
      description: "Nam hic laboriosam et voluptatem sit nesciunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.825776963621244",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 17,
      name: "Nakia Hilll",
      tel: "550.749.3550",
      address: "91052 Haag Mews",
      opening_hours: "08:00",
      description: "aut tenetur esse",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.48042257453397",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 18,
      name: "Ms. Marcelina Daniel",
      tel: "015.923.8503",
      address: "75556 Abbott Green",
      opening_hours: "08:00",
      description: "ipsam autem atque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.88984205688729",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 19,
      name: "Nona Zulauf",
      tel: "1-297-960-0070",
      address: "541 Cristina Trafficway",
      opening_hours: "08:00",
      description:
        "Maiores quia voluptatem omnis libero sunt ratione. Labore sit molestiae cum vitae aut dolor. Nam esse veritatis deserunt blanditiis enim.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.43212094405876",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 20,
      name: "Felton Larkin",
      tel: "969-756-9530",
      address: "990 Koch Rest",
      opening_hours: "08:00",
      description: "adipisci",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.543812327562776",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 21,
      name: "Ivory Mohr",
      tel: "360-367-6110",
      address: "82510 Gleason Lane",
      opening_hours: "08:00",
      description:
        "Molestias in reprehenderit quaerat fugiat earum est. Est facilis et molestiae molestiae deserunt est nemo. Facilis deserunt placeat incidunt. Veritatis velit iure commodi quo possimus quis eveniet aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.27774059566284",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 22,
      name: "Mrs. Tyler Hintz",
      tel: "935-792-7003 x4138",
      address: "33448 Magnolia Camp",
      opening_hours: "08:00",
      description:
        "Incidunt quia similique aut ad beatae qui. Quos voluptatem ipsum magni doloremque neque exercitationem eius. Rem sed corporis. Iste eligendi molestiae exercitationem voluptates ut autem.\n \rMinima officiis consequatur et adipisci ut porro facilis. Ut esse architecto ex. Et suscipit et deserunt ipsum dolorem. Praesentium suscipit illo in sit ut saepe. Error rerum id praesentium non numquam sapiente. Enim illum sint beatae itaque.\n \rLaborum aut quae. Delectus quidem recusandae eaque. Corrupti delectus tenetur error laudantium necessitatibus a. Similique itaque praesentium accusamus dolorum rem qui dolore rerum molestias. Veniam fugiat labore ex. Dolores autem pariatur ducimus similique ut provident.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.068605208409934",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 23,
      name: "Robbie O'Kon",
      tel: "1-535-638-7242 x346",
      address: "999 Tobin Loop",
      opening_hours: "08:00",
      description:
        "Voluptatem sint cupiditate.\nMolestiae ut quidem.\nFugit eligendi perferendis aspernatur sed hic impedit nisi quod.\nSimilique voluptatem voluptatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.89212138477068",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 24,
      name: "Raegan Kuvalis",
      tel: "(183) 194-9770 x04294",
      address: "36380 Schamberger Trace",
      opening_hours: "08:00",
      description:
        "Officia odit minus eaque qui. Ea aut animi exercitationem itaque. Optio qui vitae quasi deleniti. Qui reprehenderit similique totam sequi est. Placeat est consequatur sit reiciendis qui et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.053123229504102",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 25,
      name: "Trystan Gutmann",
      tel: "305-155-3556 x04873",
      address: "77853 Claire Extensions",
      opening_hours: "08:00",
      description: "veritatis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.93367880424419",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 26,
      name: "Reva Rath Sr.",
      tel: "377.603.8574 x2235",
      address: "00433 Hills Lock",
      opening_hours: "08:00",
      description:
        "Placeat numquam fugit qui mollitia et molestiae eum debitis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.86895260181106",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 27,
      name: "Charlie Kuhlman",
      tel: "350-715-2532 x811",
      address: "38920 Kessler Forge",
      opening_hours: "08:00",
      description: "Eum veritatis ut tempore voluptatum accusamus est et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.47239161939412",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 28,
      name: "Carley Quitzon",
      tel: "(923) 945-9454 x4815",
      address: "882 Sanford Estate",
      opening_hours: "08:00",
      description:
        "Quia ut consequatur qui ducimus voluptas sequi dolorem quidem aliquam. Aliquid et beatae. Minima voluptatum quaerat natus ipsum mollitia libero et non vitae. Aut sequi amet molestiae molestias adipisci. Mollitia excepturi quis laudantium in rem vitae blanditiis. Minima tempora ipsa in odio dolor.\n \rPraesentium inventore nihil quibusdam harum ipsum voluptatem. Aliquam repellat est ut et facilis culpa possimus enim quam. Natus hic et doloribus aut enim. Sit quos magni ut quia quasi autem aliquid et. Harum minus eos rerum aliquam ratione.\n \rAd eum eos quis molestias. Odio sit architecto dolore commodi qui officiis. Est dolorem ab. Earum qui voluptatem possimus. Commodi ipsam ipsum recusandae praesentium est minus rerum fuga. Maiores corporis voluptas perspiciatis aut et cum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.61495148863719",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 29,
      name: "Miss Hillary Zemlak",
      tel: "579-686-2707 x9105",
      address: "453 Jimmie Parkway",
      opening_hours: "08:00",
      description: "quidem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.859207362535116",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 30,
      name: "Barry Borer",
      tel: "1-737-818-6801 x471",
      address: "1121 Erin Flat",
      opening_hours: "08:00",
      description:
        "Dolor quis suscipit veniam fugit neque quia.\nMagni amet quam aliquam.\nFuga quis reiciendis.\nVoluptas itaque labore corporis dolorem velit numquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.12669504158778",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 31,
      name: "Fermin Moen",
      tel: "013.273.9361 x37468",
      address: "8546 Gerlach Row",
      opening_hours: "08:00",
      description:
        "Est quasi atque sint corporis nobis sint itaque et non. Quibusdam labore et ut. Et consequatur officiis excepturi praesentium corporis illo ex. Sit est optio. Aperiam sint est quia placeat quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.74212276735119",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 32,
      name: "Tre Waelchi",
      tel: "1-852-087-2061 x327",
      address: "93658 Catalina Forges",
      opening_hours: "08:00",
      description:
        "Quis praesentium ut temporibus. Ipsam officia quos. Repellat reiciendis sequi corporis rerum maiores culpa natus. Quia quia fugit temporibus ea tempore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.23283445556312",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 33,
      name: "Susie Schmidt",
      tel: "223.764.8561",
      address: "220 Wiegand Valleys",
      opening_hours: "08:00",
      description:
        "Nihil quia qui consequatur quia facere aut aspernatur id. Voluptas repellendus ut quisquam adipisci voluptatem excepturi fugiat quia laboriosam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.12995066542421",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 34,
      name: "Dr. Lenora Legros",
      tel: "1-598-627-4248 x4824",
      address: "083 Ritchie Mountains",
      opening_hours: "08:00",
      description:
        "Eum consequatur ut eos aut et eum. Aut nam rem. Voluptatem vel odio enim nulla officiis ratione explicabo vero. Veniam qui et qui minus. Delectus qui eum dignissimos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.64930877890849",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 35,
      name: "Nya Harvey",
      tel: "012-784-6760 x6704",
      address: "8128 Freda Land",
      opening_hours: "08:00",
      description:
        "Voluptatem nisi tenetur. Et unde hic ut error maiores dicta. Sunt alias id quidem sed ducimus.\n \rNecessitatibus ea voluptate odio. Nemo nemo fuga natus. Neque eum omnis dolore voluptas sequi maiores. Impedit amet at nobis in et. Assumenda esse iure et. Eius et quidem qui reprehenderit aspernatur ullam autem enim expedita.\n \rLaudantium vel molestiae. Eveniet magni earum et ea ea. Voluptate doloremque inventore illum voluptas et adipisci.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.66085230138665",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 36,
      name: "Colt Prohaska Jr.",
      tel: "950-585-3287",
      address: "20762 Imelda Tunnel",
      opening_hours: "08:00",
      description: "voluptas non aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.27086326592712",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 37,
      name: "Baylee Batz",
      tel: "994-521-8579 x475",
      address: "1396 Feil Ports",
      opening_hours: "08:00",
      description:
        "Iste autem optio. Qui sit repellat officiis neque eos aut. Iste similique facere.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.27307789386615",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 38,
      name: "Sibyl Sawayn",
      tel: "1-925-175-3814",
      address: "51184 Walter Way",
      opening_hours: "08:00",
      description: "eos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.067245794327498",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 39,
      name: "Esmeralda Schroeder",
      tel: "667-553-3538 x947",
      address: "17699 Cristina Mountain",
      opening_hours: "08:00",
      description:
        "Dolor vero dolores quisquam laboriosam ratione vitae dolores consequatur. Voluptas quo enim voluptas magnam rerum aliquam maxime sunt et. Labore repellendus eos soluta aut aut reprehenderit unde eum. Sequi quisquam explicabo et tempora libero.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.34828319570124",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 40,
      name: "Maddison Mitchell",
      tel: "(592) 860-4176",
      address: "0823 Connelly Center",
      opening_hours: "08:00",
      description: "rerum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.17444347894023",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 41,
      name: "Aryanna Botsford",
      tel: "157.192.3249",
      address: "147 Liza Island",
      opening_hours: "08:00",
      description:
        "Sapiente omnis odio veniam id eaque laudantium alias rerum culpa. Voluptatem vel excepturi. Molestiae quae veniam suscipit voluptatem temporibus. Itaque laudantium et. Voluptas dignissimos et possimus. Et accusamus et voluptatibus inventore fugiat aspernatur distinctio magni.\n \rMolestias recusandae officiis in natus sunt. Quia omnis qui eum deleniti asperiores voluptas vitae. Aut et deleniti eum ut omnis ducimus quidem temporibus assumenda.\n \rVel dicta unde dolore est sed totam saepe aperiam. Omnis consequatur quis ut excepturi fugit ut. Hic vel facilis. Vero cumque et officia praesentium minus assumenda labore fugiat quae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.530391900567583",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 42,
      name: "Ricky Bins",
      tel: "1-575-262-5073",
      address: "57504 Harvey Groves",
      opening_hours: "08:00",
      description: "mollitia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.32040993698305",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 43,
      name: "Kelsie Wuckert",
      tel: "1-455-175-5231 x0142",
      address: "88475 Braun Orchard",
      opening_hours: "08:00",
      description:
        "Sunt voluptatem amet animi omnis perspiciatis dignissimos fuga blanditiis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.43774802703869",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 44,
      name: "Aiyana Feil",
      tel: "888-838-8886",
      address: "701 Reilly Island",
      opening_hours: "08:00",
      description: "nam reprehenderit tenetur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.71769161836378",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 45,
      name: "Gussie Leannon",
      tel: "(635) 662-0796",
      address: "081 Elta Mills",
      opening_hours: "08:00",
      description:
        "Debitis aut repellat autem. Autem et laborum et. In repellat esse est. Voluptas maxime soluta et omnis est repellendus ut accusantium. Iusto non consectetur aut eos doloremque quia totam illo. Laboriosam quod illum fuga et nisi excepturi fugit.\n \rSit voluptatem doloremque in. Voluptatem atque quod possimus molestiae praesentium harum. Sunt quia soluta rerum distinctio et suscipit quia ut. Error itaque sequi magnam sed et. Accusamus iusto voluptatibus soluta eius. Sed ducimus a.\n \rMollitia vel illo qui provident soluta illo vitae rerum fuga. Saepe qui voluptatibus ipsam. Aut corrupti quo ipsa excepturi dolorum reiciendis inventore consequuntur inventore. Illo consequuntur architecto quo incidunt. Officia optio dolorem ex nostrum quo at omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.111237187303597",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 46,
      name: "Miss Kenyon Jast",
      tel: "1-379-054-5472 x18166",
      address: "09971 Kieran Field",
      opening_hours: "08:00",
      description:
        "Dolore saepe cum. Molestiae similique ut non sit nulla quas odio nihil asperiores. Officiis esse ut adipisci non neque. Voluptatem numquam ut est dolorum iure illo. Mollitia ea earum perspiciatis nulla ea tempora est error. Et numquam non nemo minima voluptatibus animi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.31803292658398",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 47,
      name: "Delfina Fay",
      tel: "1-115-909-5657",
      address: "47839 Angeline Corners",
      opening_hours: "08:00",
      description:
        "Eligendi tempore totam id odio mollitia provident quisquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.33407125373679",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 48,
      name: "Kelli Volkman",
      tel: "724-879-0132",
      address: "61975 Hester Fall",
      opening_hours: "08:00",
      description: "asperiores delectus sint",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.53439836002974",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 49,
      name: "Taylor Mosciski DVM",
      tel: "453-557-2497 x1827",
      address: "581 Wendell Underpass",
      opening_hours: "08:00",
      description:
        "Ipsum aut quis et. Quia ducimus officiis aut aut tempora voluptatem voluptatibus repellendus. Quis delectus quia at asperiores alias.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.54676994018968",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
    {
      id: 50,
      name: "Verlie Grimes",
      tel: "270-435-0690",
      address: "8400 Deanna Lodge",
      opening_hours: "08:00",
      description:
        "Qui sequi occaecati molestias dolores. Dolores nemo quis ut unde atque soluta quibusdam tempora iusto. Non voluptates reiciendis aut ut perferendis. Perspiciatis assumenda mollitia dolor qui soluta. Molestias saepe autem. Vel voluptas veniam magni sit.\n \rOmnis ab ut necessitatibus temporibus beatae vero saepe. Reiciendis quia qui officia. Aut quo excepturi aliquid expedita.\n \rEst porro molestias fuga quas quas libero vel modi. Et omnis fuga cum culpa nisi. Autem unde id nam et. Expedita et voluptatem. Harum quod debitis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.115522729236645",
      viewCounts: 0,
      createdAt: "2022-06-30T15:59:31.000Z",
      updatedAt: "2022-06-30T15:59:31.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-06-30T15:59:31.000Z",
        updatedAt: "2022-06-30T15:59:31.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>