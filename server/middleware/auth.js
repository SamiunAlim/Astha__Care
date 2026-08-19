import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
  try {
    const token = header.split(' ')[1];
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

export const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'You do not have permission for this action' });
  }
  next();
};

export const canAccessResident = (req, res, next) => {
  const requested = String(req.params.residentId || '');
  const ownId = String(req.user.id || '');
  const linkedResident = String(req.user.residentId || '');
  if (req.user.role === 'resident' && requested !== ownId) {
    return res.status(403).json({ message: 'You cannot access another resident record' });
  }
  if (req.user.role === 'family' && requested !== linkedResident) {
    return res.status(403).json({ message: 'You can only access your linked resident record' });
  }
  next();
};
