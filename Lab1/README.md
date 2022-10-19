# Lab 1

Aufgabenstellung:

Erstellung eines ARM Templates welches:

    Einen Azure Storage Account (Free Tier) anlegt
    Eine Azure Web-App für node.js (Free Tier) anlegt
    Parameters verwendet
    
---

## Deployment


```PowerShell
az deployment group create --name devenvironment --resource-group myTestRG --template-file "C:\Users\danie\Documents\GitHub\Software_Deployment_W22\Lab1\azuredeploy.json" --parameters "C:\Users\danie\Documents\GitHub\Software_Deployment_W22\Lab1\azuredeploy.parameters.json"
```

---

I used these guides ([1](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create-first-template?tabs=azure-powershell) | [2](https://learn.microsoft.com/en-us/azure/azure-monitor/app/resource-manager-web-app?tabs=json)) from Microsoft for the creation and deployment of the ARM template. I had some issues during deployment:

>1. Firstly, I had difficulty installing Azure PowerShell so I switched to Azure CLI which installed smothly. 
>2. Most of my trubles came from an "Cannot find ServerFarm with name Lab1ServerFarm" error: 
  >- After searching on the web I realized that I was missing an ServerFarm so I added the creation of a serverFarm to the template.
  >- Took me a while realize that the ServerFarm has to be in the same resource group as the web app.

After fixing these issues I managed to deploy successfully.
