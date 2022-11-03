# Lab 1

Aufgabenstellung:

Aufbau einer DevOps pipeline basierend auf Azuer DevOps mittels einen Node.JS Beispieles. 

Für das Beispiel ist eine Node.Js Applikation mittels Express aufzubauen. Diese Soll mittels einer Azuer DevOpps pipeline in einer Azure Web App nach jedem commit deplyoed werden.  Die Node.js applikation ist mit Testfällen auszustatten. Zusätzlich zu der build Pipeline soll auch ein Release Pipeline erstellt werden, welche ein automatische Übernahme eines Releases in Produktion geährleistet. Diese ist mit einem Manuellen check auszustatten und soll nicht nach jedem build veröffentlicht werden.  Abschließend sollte die Applikation Azure Application Insights einbinden. 
    
---


#### Link to the Azure Web Apps
* Dev: https://lab2dev.azurewebsites.net/
* Prod: https://lab2prod.azurewebsites.net/
---

#### Build/Test/Deploy Pipeline

* Summary
  * ![](Pictures/BTDP summary.PNG)
  
* Successful run
  * ![](Pictures/BTDP success.PNG)

* Tests summary
  * ![](Pictures/BTDP tests summary.PNG)
  
--- 

#### Azure DevOps Release Pipeline

The Development state updates automaticly with every new artifact release. The Production state requires a manual approval for deployment.

* Pending approval
  * ![](Pictures/Pipeline pending approval.PNG)

* Approving
  * ![](Pictures/Pipeline approving.PNG)
  
* Successful Deployment of both stages
  * ![](Pictures/Pipeline success.PNG)
