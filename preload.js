const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('desktop', {
  pickFile: () => ipcRenderer.invoke('nt:pick-file'),
  openFile: (filePath) => ipcRenderer.invoke('nt:open-file', filePath)
});
