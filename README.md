# Digital signage

Digital signage frontend and backend. In addition: All you need is a computer and screen (size 1920px x 1080px) to show, airport timetables, news, weather etc. Meant to be used in hotels, conference centres and headquarters near airports.  

THIS PROJECT IS CURRENTLY OFFLINE!

## How to start

Use a screen with the size of 1920px x 1080 px and open the link(s) given above.

OR:

1. Open Google Chrome -browser. 
2. Open the dev tools 
3. Choose "Toggle device toolbar" to adjust the screen size (more info: https://developer.chrome.com/docs/devtools/device-mode/)
4. Set screen width: 1920px and height 1080px.
5. This is a signage meant to be hanging on the wall at the hotel lobby or coference room. This is not responsive. 

### Left side

The left side will show you arrivals and departure flights of the chosen airport.

### Right side

The right side will show you news, weather forecast, info and advertisements. The upper section consists of news and weather. The lower is the area for advertisements (some random GIF animations and info text regarding hotel gym, breakfast and transportation to the airport as examples).

### Topbar

Topbar is showing the weekday. If the signage is meant to be situated near Helsinki Airport, the right part of the topbar is showing next trains departing to city center from the airport's train station. 

### Data update

This app fetches the new data every 3mins.

### Backend

The backend used here is AWS API Gateway, Lambda and DynamoDB. Read more about it here: https://github.com/jvhytonen/signage-aws-lambda

