My Folder Structure: Why I Chose Subtree over Submodule

As a JavaScript Developer, main apni saari learning aur assignments ek single master repository (SMIT-BATCH-17) mein manage karta hu. Is master folder mein HTML, CSS, aur React JS ke alag alag project folders hain.

Mera Goal kya tha?
Mujhe apne master folder ko maintain rakhte hue, apne best React projects (jaise Counter App ya Next.js apps) ko apni GitHub profile par alag alag independent repositories mein push karna tha taake portfolio strong banay.

Maine Submodule kyun REJECT kiya?
Agar main Submodule use karta, toh mujhe har React project ke folder mein ja kar git init karna parta. Locally mere master folder ke andar 10 alag alag .git repositories ban jatin. Mujhe har folder mein andar jaa kar alag se commit aur push karna parta, aur phir master folder mein aakar dobara push karna parta. Yeh approach IMPORT ke liye achi hai, par mere EXPORT wale goal ke liye ek lamba azaab (headache) thi.

Subtree ne meri life easy kaise ki?
Subtree ne mujhe locally ek hi master .git rakhne ki azaadi di. Main ab bhi SMIT-BATCH-17 ke root folder mein khara reh kar poora project manage karta hu.
Jab mujhe koi specific React app recruiters ke liye export karni hoti hai, main root directory se sirf yeh jadoo ki command chalata hu:

git subtree push --prefix "React/My-App-Folder" <External-Repo-URL> main

Is tarah mera master backup bhi up-to-date rehta hai, aur meri separate portfolio repositories bhi independently update ho jati hain bina kisi local nested git ke!