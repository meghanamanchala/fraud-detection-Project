import mongoose from "mongoose";

const FraudSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
    riskLevel: { type: String, required: true }, 
    reportedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Fraud = mongoose.models.Fraud || mongoose.model("Fraud", FraudSchema);
export default Fraud;
