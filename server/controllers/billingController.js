import Billing from '../models/Billing.js';

export const getBillings = async (req, res) => {
  try {
    const billings = await Billing.find({ residentId: req.params.residentId }).sort({ createdAt: -1 });
    res.json(billings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBillingById = async (req, res) => {
  try {
    const billing = await Billing.findById(req.params.id);
    if (billing) res.json(billing);
    else res.status(404).json({ message: 'Billing not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const payBilling = async (req, res) => {
  try {
    const billing = await Billing.findById(req.params.id);
    if (!billing) return res.status(404).json({ message: 'Billing not found' });
    const allowed = req.user.role === 'resident'
      ? String(billing.residentId) === String(req.user.id)
      : String(billing.residentId) === String(req.user.residentId);
    if (!allowed) return res.status(403).json({ message: 'You cannot update this billing record' });
    billing.status = 'paid';
    billing.paidAt = new Date();
    await billing.save();
    res.json(billing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
