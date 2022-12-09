# Description

This Proof of Concept (POC), uses Next.js and [Waze's API](https://www.youtube.com/@rafaellaballerini) to help user find the best route to the hospitals prevously registered. It gives a map in a [Waze's IFrame](https://developers.google.com/waze/iframe) too, helping the user to find any location wanted.

# Technical

This project uses:

* [Next.js](https://nextjs.org/docs/getting-started)
* Typescript
* Styled Components

### Hospital JSON

Hospitals were registered using the following JSON structure:
```json
[
  ...
  {
    "name": "Hospital Nossa Senhora das Graças",
    "imgSrc": "/assets/hospitals/hnsg.png",
    "address": "R. Alcídes Munhoz, 433",
    "location": {
        "lat": "-25.42109",
        "lon": "-49.2906975"
    }
  },
  ...
]
```

# Waze API Connection

If the location on `hospitals.json` is available, the request used is:

```
https://waze.com/live-map/directions?navigate=true&to=ll.${location.lat},${location.lon}&from=ll.${userLocation.lat},${userLocation.lon}
```

Where (`${location.lat},${location.lon}`) is provided by the location, and the (`${userLocation.lat}, ${userLocation.lon}`) is provided by [HTML Geolocation API](https://www.w3schools.com/html/html5_geolocation.asp#:~:text=The%20HTML%20Geolocation%20API%20is%20used%20to%20get%20the%20geographical,unless%20the%20user%20approves%20it.&text=Note%3A%20Geolocation%20is%20most%20accurate,devices%20with%20GPS%2C%20like%20smartphones.) geted in the index page.

If the location is not available, the request changes to the search query:

```
https://waze.com/live-map/ul?q=${encodedLocation}&navigate=true
```

This query needs a `encondedLocation`, in this case it is used the name of the hospital in a `encondedURI` way to prevent errors passing the name to the query.

Both methods open a new tab with the route. In web mode it requests to do a login on their platform, meanwhile in the mobile mode it opens a new tab in your default browser and, depending of the cell phone brand, it phones opens instantly or gives a button to redirect to the Waze's app if it is installed, if not it requests to install.

# Running

Run the following commands inside the project folder:

1 - `npm install` or `yarn`

2 - `npm dev` or `yarn dev` to run local on port 5000

3 - `npm start` or `yarn start` to start server on port 80

# Deployed App

It is possible o find this application running on:

* https://poc-waze-master.vercel.app/
