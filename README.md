hostping_node
=============

This is utility node js application for ping remote hosts.

##Installation


Copy content of repository by running git command ```git clone https://github.com/tormozz48/hostping_node.git```

Move to application folder hostping_node

Open hosts.xml file. For me it seems like:

```
<?xml version="1.0" encoding="UTF-8"?>
<root>
  <repeat-interval>60</repeat-interval>    
  <host>http://hostping.herokuapp.com</host>
  <host>http://homefinance.herokuapp.com</host>
  <host>http://daryatoys.herokuapp.com</host>   	       
</root>	
``` 

Change repeat interval (in seconds) if it necessary.

Create your lists of host urls which should be requested by application

Save hosts.xml file.

Run ```npm install``` command

Run ```node app.js``` for start application




