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

* Failed build caused by wrong pathing.
  * ![](https://github.com/DanielC000/Software_Deployment_W22/blob/4ee6e9c751d795a5bfd6c26cdb313d5ad02345c1/Lab2/Pictures/BTDP%20failed%20build.png)
* Build successful but could not find test-results.yaml. This was fixed by adjusting the search folder parameter.
  * ![](https://github.com/DanielC000/Software_Deployment_W22/blob/4ee6e9c751d795a5bfd6c26cdb313d5ad02345c1/Lab2/Pictures/BTDP%20missing%20test%20results.png)
* Summary of a successful run of the Build/Test/Deploy Pipeline.
  * ![](https://github.com/DanielC000/Software_Deployment_W22/blob/33337e1c74cea352e4cec047a3c9d659a0856cd4/Lab2/Pictures/BTDP%20summary.png)
  
* Successful run
  * ![](https://github.com/DanielC000/Software_Deployment_W22/blob/33337e1c74cea352e4cec047a3c9d659a0856cd4/Lab2/Pictures/BTDP%20success.png)

* Tests summary
  * ![](https://github.com/DanielC000/Software_Deployment_W22/blob/33337e1c74cea352e4cec047a3c9d659a0856cd4/Lab2/Pictures/BTDP%20tests%20summary.png)
  
--- 

#### Azure DevOps Release Pipeline

The Development state updates automatically with every new artifact release. The Production state requires a manual approval for deployment.

* Pending approval
  * ![](https://github.com/DanielC000/Software_Deployment_W22/blob/33337e1c74cea352e4cec047a3c9d659a0856cd4/Lab2/Pictures/Pipeline%20pending%20approval.png)

* Approving
  * ![](https://github.com/DanielC000/Software_Deployment_W22/blob/33337e1c74cea352e4cec047a3c9d659a0856cd4/Lab2/Pictures/Pipeline%20approving.png)
  
* Successful Deployment of both stages
  * ![](https://github.com/DanielC000/Software_Deployment_W22/blob/8ff861fd1e62d07dfcf3c5132b86fb8b13a5736c/Lab2/Pictures/Pipeline%20success.png)
