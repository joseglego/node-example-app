const db = require('../../../models')

exports.getEnterprises = (req, res) => {
  db.Enterprise.findAll().then(enterprises => {
    res.json({ enterprises })
  })
}

exports.getEnterprise = (req, res) => {
  db.Enterprise.findByPk(req.params.id).then(enterprise => {
    res.json(enterprise)
  })
}
