
export const roleValidator = (rolesPermitidos) => (req, res, next) => {
    if (!rolesPermitidos.includes(req.user.role)) {
        return res.status(403).json({ message: "Do not have permission"})
    }
    next()
}