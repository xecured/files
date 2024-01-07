addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // Define your file-serving rules here
  const fileLocations = {
   //gta5-fg-2802

   '/gta5-fg-2802-p1': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part1.zip',
   '/gta5-fg-2802-p2': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part2.zip',
   '/gta5-fg-2802-p3': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part3.zip',
   '/gta5-fg-2802-p4': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part4.zip',
   '/gta5-fg-2802-p5': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part5.zip',
   '/gta5-fg-2802-p6': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part6.zip',
   '/gta5-fg-2802-p7': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part7.zip',
   '/gta5-fg-2802-p8': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part8.zip',
   '/gta5-fg-2802-p9': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part9.zip',
   '/gta5-fg-2802-p10': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part10.zip',
   '/gta5-fg-2802-p11': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part11.zip',
   '/gta5-fg-2802-p12': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part12.zip',
   '/gta5-fg-2802-p13': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part13.zip',
   '/gta5-fg-2802-p14': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part14.zip',
   '/gta5-fg-2802-p15': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part15.zip',
   '/gta5-fg-2802-p16': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part16.zip',
   '/gta5-fg-2802-p17': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part17.zip',
   '/gta5-fg-2802-p18': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part18.zip',
   '/gta5-fg-2802-p19': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part19.zip',
   '/gta5-fg-2802-p20': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part20.zip',
   '/gta5-fg-2802-p21': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part21.zip',
   '/gta5-fg-2802-p22': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part22.zip',
   '/gta5-fg-2802-p23': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part23.zip',
   '/gta5-fg-2802-p24': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part24.zip',
   '/gta5-fg-2802-p25': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part25.zip',
   '/gta5-fg-2802-p26': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part26.zip',
   '/gta5-fg-2802-p27': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part27.zip',
   '/gta5-fg-2802-p28': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part28.zip',
   '/gta5-fg-2802-p29': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part29.zip',
   '/gta5-fg-2802-p30': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part30.zip',
   '/gta5-fg-2802-p31': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part31.zip',
   '/gta5-fg-2802-p32': 'https://github.com/xecured/files/releases/download/gta5-fg-2802/Xecured.cf_GTA-5_FitGirl-Repack_1-0-2802.part32.zip',
   
   //beta-testing

   '/new': 'https://files2.freedownloadmanager.org/6/latest/fdm_x64_setup.exe',
   '/vs': 'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user',
   '/nine': 'https://github.com/xecured/games/releases/download/FITGIRL/XECURED-GTA-5-FITGIRL-REPACK-1-0-2802.part92.zip',
   '/adobe': 'https://github.com/xecured/games/releases/download/FITGIRL/XECURED-ADOBE-ACROBAT-PRO-DC-2023-CRACKSHASH-23-006-20380.zip',
    // Add more rules as needed
  }

  // Check if the requested path needs to serve a file
  const fileLocation = fileLocations[url.pathname]

  // If a file location is found, fetch the file and serve it
  if (fileLocation) {
    const fileResponse = await fetch(fileLocation)
    return new Response(fileResponse.body, {
      status: fileResponse.status,
      statusText: fileResponse.statusText,
      headers:{'Access-Control-Allow-Origin': '*', 'Content-Disposition': 'contentDisposition', ...Object.fromEntries(fileResponse.headers)}
        })
  }

  // If no specific rule matches, return a 404 response
  return new Response('File not found', { status: 404 })
}

