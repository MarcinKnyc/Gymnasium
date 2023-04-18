# Setup
1. Clone this repo
2. Go to GymApp
3. Run GymApp.sln in VS 2022
4. Set project type to docker-compose
5. Click "play". Dockers will pull and build.
6. If everything's built fine, stop the project
7. Change project type to GymApp (.NET web api project)
8. Go to packet manager terminal
9. in GymApp/appssettings.json uncomment the connection string for migrations
10. Run migrations: `Get-Migration` and `Update-Database`
11. in GymApp/appssettings.json uncomment the connection string for everything else
12. Set project type to docker-compose and click play
13. Check if requests on http://localhost/swagger/index.html execute propoerly ("try it out", "execute")