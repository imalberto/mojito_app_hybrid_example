# Mojito Hybrid Example Application

Check out the application.

    > git clone https://github.com/capecodehq/mojito_app_hybrid_example.git

## Run with a Mojito Server

Start the server;

    > ./scripts/start-server

Open in a web browser [http://localhost:8666/](http://localhost:8666/)

## Build for use with a File Server

	> ./scripts/edge-cache-build

You can now serve the contents of the "./builds/edge-cache/" directory with Connect, Apache or GitHub [like this example](http://capecodehq.github.com/mojito_app_hybrid_example/).

## Build for use with the Cocktails Runtime

	> ./scripts/ycrt-build

You can now open the contents of the "./builds/ycrt/android/" or "./builds/ycrt/ios/" with Eclipse or Xcode respectively and build the the Mojito application as a native install.