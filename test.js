var ridict = require('./index');
var data = "Equity Bank Group has written a protest letter to the Central Bank of Kenya (CBK) objecting to Safaricom’s intended increase of charges on bank-to-MPesa transfers, which once effected will raise fees charged on Equitel — its mobile banking service. Equity’s new mobile money service Equitel has been hit hardest by the changes, with cash transfers from the platform to M-Pesa rising from the flat rate of Sh33 by up to 266.6 per cent to Sh121 on a transfer of Sh35,000. While the decision is set to earn Safaricom more revenue on the bank-to-MPesa transactions, Equity sees it as a move to discourage the uptake of its Equitel service as it will now be more expensive to send money to M-Pesa. “We cannot rule out the increase being a retaliation to the increasing uptake of Equitel, an innovative channel to access the bank made available in partnership with our affiliate Finserve Africa Limited that is licensed by the Communications Authority,” Equity CEO James Mwangi told CBK governor Patrick Njoroge in the letter dated August 28. In a letter to Equity dated July 9, Safaricom says it is responding to rising cases of errors in bank-to-M-Pesa transactions, especially those where people send money directly to third parties without depositing the sums in their own M-Pesa accounts first.";

var data= process.argv[2] || "i love boiled maize and some raw jam" 
var res = ridict.matches(data);

console.log(res)