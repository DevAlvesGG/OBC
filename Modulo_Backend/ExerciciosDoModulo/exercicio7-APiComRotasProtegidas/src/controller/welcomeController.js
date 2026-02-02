module.exports = {
// GET /welcome
    welcome: (req, res) => {
        const displayName = req.authenticatedUser?.name ?? 'Vizitante';
        res.json({message: `Bem vindo, ${displayName}!`});
    }
};