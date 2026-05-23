Git Submodule (The "IMPORT" Tool)
Basic Concept:
Git Submodule ka asal maqsad kisi doosri (external) repository ke code ko apne project ke andar IMPORT karna hota hai. Yeh doosre ka code apne project mein copy-paste karne se bachata hai.

Aap isko ek YouTube video ki tarah samjhein jo kisi website par embed (link) hoti hai. Website video ko download nahi karti, sirf link dikhati hai. Agar original video update hogi, toh website par bhi naya content nazar ayega.

Diagram:
[Main Project (Parent)]
       |
       |--- Folder A (Apna code)
       |
       |--- Folder B (Submodule - IMPORTED)  <---- 🔗 Linked to [External Repo]



Real-world Use Case (Companies mein kaise use hota hai):
Farz karein ek Software House 3 alag apps bana raha hai: Patient App, Doctor App, aur Admin Panel. Teeno mein ek same "Login Form" use hona hai.

Developer ek choti si Shared-UI repo banayega.

Phir us repo ko teeno badi apps mein as a Submodule import kar dega.

Agar form mein koi change karni ho, toh sirf ek jagah change hogi aur git submodule update chala kar sab apps mein auto-update ho jayega.

Drawback (Nuqsan):
Har submodule locally ek alag repository ban jata hai. Aapko us folder ke andar jaa kar manually commands chalani parti hain.