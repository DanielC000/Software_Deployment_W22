# Lab 1

Aufgabenstellung:

Erstellung eines ARM Templates welches:

    Einen Azure Storage Account (Free Tier) anlegt
    Eine Azure Web-App für node.js (Free Tier) anlegt
    Parameters verwendet
    
---

## Deployment
To use the template you can adjust the parameters file by entering your data and personal configuration. Then edit this command line by adding a name for the deployment, the name of your resource group, the location of the template file, and the template parameters file on your computer. Afterward, enter the edited command line into the Azure CLI.

```cli
az deployment group create --name {deployment-name} --resource-group {your-resource-group-name} --template-file {location-of-template-file} --parameters {location-of-template-parameters-file}
```

If you don't already have a resource group use this to create one with the Azure CLI:

```cli
az group create \
  --name myResourceGroup \
  --location "Central US"
```
---

I used these guides ([1](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create-first-template?tabs=azure-powershell) | [2](https://learn.microsoft.com/en-us/azure/azure-monitor/app/resource-manager-web-app?tabs=json)) from Microsoft for the creation and deployment of the ARM template. I had some issues during deployment:

>1. Firstly, I had difficulty installing Azure PowerShell so I switched to Azure CLI which was installed smoothly. 
>2. Most of my troubles came from a "Cannot find ServerFarm with name Lab1ServerFarm" error:
  >- After searching on the web I realized that I was missing a ServerFarm so I added the creation of a ServerFarm to the template.
  >- Took me a while to realize that the ServerFarm has to be in the same resource group as the web app.

After fixing these issues I managed to deploy successfully.
