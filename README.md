### *🚀 Fraud Detection Dashboard – Project Overview*  

#### *📌 What is This Project?*  
The *Fraud Detection Dashboard* is a *web application* designed to *monitor and manage fraudulent activities* in real-time.  
It helps organizations track and analyze fraudulent *apps and URLs, enabling security teams to take **proactive measures*.  

---

## *🎯 How It Works?*  
### *1️⃣ User Authentication*  
- Users *sign up* as either *Admin* or *Regular User*.  
- Admins *manage fraud cases, while Regular Users **can only report fraud*.  
- Users log in with *email & password authentication* (via NextAuth).  

### *2️⃣ Fraud Monitoring & Reporting*  
- A *fraud list* displays flagged *apps and URLs* with *risk levels*.  
- Users can *report new fraud cases*.  
- Fraud cases are stored in *MongoDB* and updated in real time.  

### *3️⃣ Data Visualization (30-Day Fraud Trends)*  
- An *interactive graph* displays fraud trends over the last *30 days*.  
- Uses *Chart.js* for *real-time analytics*.  

### *4️⃣ Admin Controls: Investigate, Block, Delete Fraud Cases*  
- *Admins* can *block, **investigate, and **delete* fraud entries.  
- Regular users *can only report* fraud but *cannot delete* data.  

---

## *🛠 Tech Stack Used*  
| *Technology* | *Purpose* |
|--------------|------------|
| *Next.js* | Full-stack framework for frontend & backend |
| *React.js* | Frontend UI components |
| *Tailwind CSS* | Styling & UI responsiveness |
| *NextAuth.js* | User authentication (email/password) |
| *MongoDB + Mongoose* | Database for storing fraud reports & users |
| *Chart.js & react-chartjs-2* | Fraud trend analysis visualization |
| *Axios* | API calls between frontend and backend |

---

## *🚀 Project Features*  
### ✅ *1. User Authentication & Role Management*  
✔ *Signup/Login* with *email & password* (NextAuth)  
✔ *Roles:* *Admin* (Manage fraud) & *User* (Report fraud only)  
✔ *Session Management:* Navbar updates dynamically based on role  

### ✅ *2. Real-Time Fraud Monitoring*  
✔ *Fraudulent apps & URLs displayed in a table*  
✔ *Color-coded risk levels (High 🔴, Medium 🟡, Low 🟢)*  
✔ *Real-time data fetching from MongoDB*  

### ✅ *3. Actionable Insights*  
✔ *Report Fraud* – Users can submit fraud cases  
✔ *Block Fraud* – Admins can *soft delete* fraudulent entries  
✔ *Investigate Fraud* – Mark fraud cases for review  
✔ *Delete Fraud* – Admins can permanently remove fraud reports  

### ✅ *4. 30-Day Fraud Trend Analysis*  
✔ *Interactive Graph* with *real-time updates*  
✔ *Data grouped by day* for better analysis  
✔ *Fraud trends displayed using Chart.js*  

### ✅ *5. Admin Panel*  
✔ *Only admins can access advanced fraud management features*  
✔ *Regular users are restricted from deleting/blocking cases*  

---

## *💡 How This Project is Useful?*  
🔹 *Prevents financial loss & security threats* by identifying fraud early.  
🔹 *Provides real-time monitoring* of fraud activities.  
🔹 *Enables security teams* to take *action on fraudulent activities*.  
🔹 *Improves user trust* by ensuring fraud reports are tracked and reviewed.