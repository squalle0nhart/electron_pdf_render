**How to run demo:**
 $ git clone https://github.com/squalle0nhart/electron_pdf_render.git
 $ cd electron_pdf_rendering
 $ npm i 
 $ npm start
Note: Password for PDF file test is: **123456** . You change link of pdf to whatever you want, not just local pdf.

**Description:**
* From **ElectronJS 1.6.4** they have added the native pdf rendering (https://github.com/electron/electron/pull/8435) base on origin extension from chromium. 
* But from **Electron 1.6.11** (ChatWork currently use this version) to use native pdf rendering we need to enable plugins setting in Browser Window (https://github.com/electron/electron/pull/9564). So if we need using native pdf we need enable plugin setting
* Native PDF rendering in **Electron 1.6.11** doesnt support print and search feature. If we need that features we need **update** version of **Electron**

P/s: I have found that in Electron 1.7.1 we dont need enable plugins setting to use native pdf rendering (but they have fixed it in later version)

**Something more**
* I have found that **Electron 1.6.11** have some security vulnerabilities (Electron give details in this link: https://electronjs.org/blog/protocol-handler-fix and https://nvd.nist.gov/vuln/detail/CVE-2018-1000118) . Electron urge all developers to update their apps to the latest stable version immediately.
