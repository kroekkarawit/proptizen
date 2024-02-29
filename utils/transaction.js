import { connectToDB } from "@utils/database";
import Bet from "@models/bet";
import User from "@models/user";
import Transaction from "@models/transaction";
import Commission from "@models/commission";

export const newTransaction = async ({ userId, amount, ref, type, status }) => {
    await connectToDB();
    const transaction = await Transaction.create({
        user: userId,
        amount: amount,
        ref: ref,
        type: type,
        status: status
    });
    return transaction

}

export const addUserCommission = async ({ userId, betId, amount }) => {
    await connectToDB();
    const user = await User.findOne({ _id: userId, status: "ACTIVE" })
    if (user) {
        const commission = await Commission.create({
            user: userId,
            bet: betId,
            amount: amount,
            status: "COMPLETE"
        });
        const transaction = await newTransaction({ userId, amount, ref: commission._id, type: "COMMISSION", status: "COMPLETE" })
        return commission && transaction ? true : false;
    }
    return false;

}