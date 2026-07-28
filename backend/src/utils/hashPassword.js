import bcrypt from "bcrypt";


class Hash{
    // this method hash password with bcrypt
    hashPassword = async(passwordPlan) => {
        // hash password with 10 round
        const passwordHash = await bcrypt.hash(passwordPlan, 10);
        return passwordHash;
        
    };
    // this method comapare the password Plan text and password Hash
    veryfyPasswordHash = async(passwordHash, passwodPlan) => {
        
        const resultComparePassword = await bcrypt.compare(passwordPlan, passwordHash);
        return resultComparePassword;
        
    }
}

export default new Hash();