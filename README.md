# Sales application

Sales application providing comfortable service for organizations to post their sales

# Run in docker container
First install docker, so it is available in terminal **docker -v command gives docker verison**
Next run docker container **sudo docker run --rm -it -v `pwd`:/app --network host theanam/react-native bash**
Docker will collect needed sdk, set env variables and so on. When make sure
**adb devices** shows your device and it's online. Next run the app

============

By the moment here is a problem running app. Probably something wrong with gradle or sdk versions. Try to google error
and to tweak versions in DockerFile