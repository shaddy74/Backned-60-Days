export const login = (req, res) => {
    const { username } = req.body;


    if (!username) {
        return res.status(400).json({ error: "Username is required" })
    }

    req.session.user = { username };

    res.cookie("username", username, { httpOnly: true, maxAge: 1000 * 62 * 62 * 24 });
    res.json({ message: "Login Successful", username });
}


export const logout = (req, res) => {
    res.clearCookie("username")
    res.session.destroy(() => {
        if (err) {
            return res.status(500).json({ error: "Error loginng out" })
        }
        res.json({ message: "logout successfull" })
    })
}