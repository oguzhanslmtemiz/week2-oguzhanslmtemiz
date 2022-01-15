const httpStatus = require("http-status");
const {
  getTokenFromHeader,
  verifyToken,
  getUserAgentFromHeader,
} = require("../utils/helper");

module.exports.userAuth = (req, res, next) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ error: "You Are Not Authorized" });
  }
  const { err, decoded } = verifyToken(token);
  if (err) {
    return res.status(httpStatus.NON_AUTHORITATIVE_INFORMATION).send(err);
  }
  return compareAgent(req, res, next, decoded);
};

const compareAgent = (req, res, next, token) => {
  const agentInHeader = getUserAgentFromHeader(req).agent;
  const agentInSession = req.session.user?.agent;
  const agentInToken = token.agent;

  if (!agentInSession) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ error: "You must login first" });
  } else if (
    agentInHeader === agentInSession &&
    agentInHeader === agentInToken
  ) {
    next();
  } else {
    return res
      .status(httpStatus.FORBIDDEN)
      .send({ error: "You can't access from a different browser" });
  }
};
