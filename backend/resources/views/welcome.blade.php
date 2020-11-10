<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title>Laravel</title>
    <link type="text/css" rel="stylesheet" href="{{ asset('css/app.css') }}" />
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs÷/jquery/1.8.1/jquery.min.js" ></script>
    {{-- <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.15/jquery-ui.min.js"></script> --}}
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</head>

<body>
    <div id="map"></div>
    <script>
        let myMap = mmp.create("map");
    </script>
</body>

</html>