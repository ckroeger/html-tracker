To check if a user permits location access in HTML5, you can use the Geolocation API provided by the browser. This API allows you to get the current position of the user, and by trying to access it, you can determine whether the user grants permission.

Here’s a simple example of how to do this:

1. Use the `navigator.geolocation.getCurrentPosition` method to request the user's current position.
2. Handle the success and error callbacks to determine if the permission was granted or denied.

Here's a complete example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Check Location Access</title>
</head>
<body>
    <button onclick="checkLocationAccess()">Check Location Access</button>
    <p id="status"></p>

    <script>
        function checkLocationAccess() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            } else {
                document.getElementById("status").innerText = "Geolocation is not supported by this browser.";
            }
        }

        function successCallback(position) {
            document.getElementById("status").innerText = "Location access granted.";
            console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
        }

        function errorCallback(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    document.getElementById("status").innerText = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    document.getElementById("status").innerText = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    document.getElementById("status").innerText = "The request to get user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    document.getElementById("status").innerText = "An unknown error occurred.";
                    break;
            }
        }
    </script>
</body>
</html>
```

In this example:

- When the button is clicked, the `checkLocationAccess` function is called.
- The function checks if the browser supports geolocation.
- It attempts to get the current position. If successful, the success callback (`successCallback`) is executed.
- If the user denies access or an error occurs, the error callback (`errorCallback`) handles it and displays the appropriate message.

This method effectively checks if the user grants location access and handles various scenarios, providing appropriate feedback to the user.


The documentation for the Geolocation API can be found on several authoritative web development resources. Here are some of the most reliable sources:

1. **MDN Web Docs (Mozilla Developer Network)**
   - This is one of the best resources for web development documentation. It provides detailed explanations, examples, and browser compatibility information.
   - **Link:** [Geolocation API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

2. **W3C (World Wide Web Consortium) Specification**
   - The W3C is the main international standards organization for the World Wide Web. The specification here is more formal and technical.
   - **Link:** [Geolocation API Specification](https://www.w3.org/TR/geolocation-API/)

3. **HTML5 Rocks (by Google)**
   - This is an excellent tutorial-based resource provided by Google that offers practical guides and examples.
   - **Link:** [Using the HTML5 Geolocation API](https://www.html5rocks.com/en/tutorials/geolocation/trip_meter/)

4. **WHATWG (Web Hypertext Application Technology Working Group)**
   - This group maintains and develops HTML and APIs in the HTML Living Standard. They also provide detailed technical documentation.
   - **Link:** [Geolocation API - WHATWG](https://html.spec.whatwg.org/multipage/geolocation.html)

These resources provide comprehensive information about the Geolocation API, including how to use it, its properties, methods, and error handling. They also offer examples and best practices to help you integrate geolocation features into your web applications effectively.