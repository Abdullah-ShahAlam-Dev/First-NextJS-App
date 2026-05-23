Git Subtree (The "EXPORT" Tool)
Basic Concept:
Git Subtree ka maqsad aapke ek bade project (Master Repo) ke andar se kisi specific folder ka code nikal kar kisi doosri separate repo mein EXPORT (push) karna hota hai.

Isme aapko locally alag alag .git folders nahi banane partay. Aapka poora bada project locally ek hi repo rehta hai, bas command chala kar ek hissa bahar bhej diya jata hai.

Diagram:
[Badi Master Repo (Local)]
       |
       |--- React Project 1  ---- EXPORT (Subtree) ----> 🚀 [Separate GitHub Repo 1]
       |
       |--- React Project 2  ---- EXPORT (Subtree) ----> 🚀 [Separate GitHub Repo 2]


Real-world Use Case (Portfolio Building):
Jab aap ek coding bootcamp ya long-term course kar rahe hon, toh aap saara kaam ek hi main folder mein karte hain. Lekin recruiters ko dikhane ke liye aapko har project ki ek clean, alag repo chahiye hoti hai. Wahan Subtree use hota hai.








git subtree push --prefix "Aapke/Folder/Ka/Path" <Repo-Link.git> main

git subtree push: Yeh Git ko batata hai ke "Bhai, poora master folder nahi bhejna, balke iske andar se ek chota hissa nikal kar bahar (export) push karna hai."

--prefix (Sab se important): Prefix ka asaan matlab hai "Folder ka Pata (Target Path)". Yeh Git ko batata hai ke master repo ke andar kis exact folder ko uthana hai. Agar aap prefix nahi doge, toh Git ko kya pata ke Next.js bhejna hai ya Counter App? Isiliye hum path dete hain taake sirf wohi folder export ho.

<Repo-Link.git>: Yeh us nayi independent repo ka address hai jahan code bhejna hai.

main: Yeh branch ka naam hai (usually hamesha main hi hoti hai).




sko bilkul aese hi parhna aur yaad rakhna hai:

Action: git subtree push (Bhai export karo)

Source (Kisko?): --prefix "NEXT JS/firstnextjsapp" (Sirf is folder ko uthao)

Destination (Kahan?): https://github.com/.../First-NextJS-App.git (Is independent URL par le jao)

Target Branch (Kis Kamray mein?): main (Aur wahan ja kar main branch mein rakh do)