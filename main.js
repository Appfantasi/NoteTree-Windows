const { app, BrowserWindow, dialog, shell, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 850,
    minWidth: 780,
    minHeight: 600,
    title: 'Note Tree',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  win.loadFile(path.join(__dirname, 'NoteTree.html'));
}

ipcMain.handle('nt:pick-file', async () => {
  const result = await dialog.showOpenDialog({ properties: ['openFile'] });
  if (result.canceled || !result.filePaths.length) return null;
  const filePath = result.filePaths[0];
  return { path: filePath, name: path.basename(filePath) };
});

ipcMain.handle('nt:open-file', async (_event, filePath) => {
  if (typeof filePath !== 'string' || !path.isAbsolute(filePath)) return 'Percorso del file non valido.';
  if (!fs.existsSync(filePath)) return 'Il file collegato non esiste più o è stato spostato.';
  return await shell.openPath(filePath);
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
