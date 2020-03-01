const express = require('express');
const router = express.Router();

const enterpriseControllers = require('./controllers/enterprises')

router.get('', enterpriseControllers.getEnterprises)
router.get('/:id', enterpriseControllers.getEnterprise)

module.exports = router;
