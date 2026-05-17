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
