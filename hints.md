Compile jar:
cd ..\Cryptator; mvn install -DskipTests; cd ..\CryptatorApp; cp ..\Cryptator\target\cryptator-0.5.0-SNAPSHOT-with-dependencies.jar .\android\app\libs\; java -jar .\android\app\libs\cryptator-0.5.0-SNAPSHOT-with-dependencies.jar

cd ..\Cryptator; mvn install -DskipTests; cd ..\CryptatorApp; cp ..\Cryptator\target\cryptator-0.5.0-SNAPSHOT.jar .\android\app\libs\; java -jar .\android\app\libs\cryptator-0.5.0-SNAPSHOT.jar

Compile project
npx react-native run-android   


adb devices     