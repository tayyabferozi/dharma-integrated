import React from "react";
import "./Terms.css"
import Paragraph from "./Paragraph/Paragraph";
import Term from "./Term/Term"

const Terms = () => {
  return (
    <div className="Terms">
      <h1 className="TermsHeading">Dharma User Agreement</h1>

      <br />

      <Paragraph center="TextCenter">Updated May 18, 2020</Paragraph>

      <Paragraph>Welcome to the Dharma! This User Agreement (“Agreement”) is between you (also referred to herein as “user”, “you” and “your”) and Dharma Labs Inc. (“Dharma”, “we”, “us” and “our”). This Agreement governs your use of the services provided by Dharma described below (“Dharma Services” or the “Services”). By signing up to use an account through Dharma.io or through the Dharma mobile application (collectively, the “Site”), you agree that you have read, understand, and accept all of the terms and conditions contained in this Agreement, including Section 12.3 (Arbitration Agreement).</Paragraph>

      <Paragraph>We may make changes to the Agreement from time to time. If we do this, we will post the changed Agreements on the Site and will indicate at the top of this page the date the was last revised. You understand and agree that your continued use of the Service or the Site after we have made any such changes constitutes your acceptance of the new Agreement.</Paragraph>

      <h2 className="TermSectionHeading">1. ACCOUNT SET UP</h2>
      <Term heading="1.1. Eligibility">
        To be eligible to use the Site you must you must be a resident of the one of the countries in which Dharma is supported and you must be the age of majority in your country of residence.
      </Term>
      <Term heading="1.2. Terms">
        If you violate any of this Agreement, or otherwise violate an agreement between you and us, Dharma may terminate your account, delete your profile and any content or information that you submitted through the Site and/or prohibit you from using or accessing the Service or the Site (or any portion, aspect or feature of the Service or the Site), at any time in its sole discretion, with or without notice.
        </Term>
      <Term heading="1.3. Registration of Dharma Account">
        You must register for a Dharma account in order to use the Dharma Services (“Dharma Account”) By using a Dharma Account, you agree and represent that you will use Dharma only for yourself, and not on behalf of any third party, unless you have obtained prior approval from Dharma. You are fully responsible for all activity that occurs under your Dharma Account. We may, in our sole discretion, refuse to open a Dharma Account, or limit the number of Dharma Accounts that you may hold or suspend or terminate any Dharma Account or the lending or borrowing of specific Digital Currency in your account.
        </Term>
      <Term heading="1.4. Identity Verification">
        During registration for your Dharma Account, you agree to provide us with the information we request, at registration or any time thereafter, for the purposes of identity verification and the detection of money laundering, terrorist financing, fraud, or any other financial crimes and permit us to keep a record of such information. You will need to complete certain verification procedures before you are permitted to use certain Dharma Services. Your access to one or more Dharma Services and the limits that apply to your use of the Dharma Services, may be altered as a result of information collected about you on an ongoing basis. The information we request may include certain personal information, including, but not limited to, your name, address, telephone number, e-mail address, date of birth, taxpayer identification number, a government identification, and information regarding your bank account (such as the name of the bank, the account type, routing number, and account number) and in some cases (where permitted by law), special categories of personal data, such as your biometric information. In providing us with this or any other information that may be required, you confirm that the information is accurate and authentic. You agree to keep us updated if any of the information you provide changes. You authorize us to make inquiries, whether directly or through third parties, that we consider necessary to verify your identity or protect you and/or us against fraud or other financial crime, and to take action we reasonably deem necessary based on the results of such inquiries. When we carry out these inquiries, you acknowledge and agree that your personal information may be disclosed to credit reference and fraud prevention or financial crime agencies and that these agencies may respond to our inquiries in full. This is an identity check only and should have no adverse effect on your credit rating.
        </Term>
      <Term heading="1.5. Registration Data; Account Security.">
        In consideration of your use of the Site, you agree to (i) provide accurate, current and complete information about you as may be prompted by any registration forms on the Site or otherwise requested by Dharma ("Registration Data"); (ii) maintain the security of your password and identification; (iii) maintain and promptly update the Registration Data, and any other information you provide to Dharma, to keep it accurate, current and complete; (iv) promptly notify Dharma regarding any material changes to information or circumstances that could affect your eligibility to continue to use the Site or Service or the terms on which you use the Site or Service; and (v) be fully responsible for all use of your account and for any actions that take place using your account.
        </Term>

      <h2 className="TermSectionHeading">2. WALLET SERVICES</h2>
      <Term heading="2.1. Wallet Services; General">
        As part of your Dharma Account, Dharma will provide qualifying users access to an Digital Currency wallet(s) for holding Digital Currencies (“Digital Currency Wallet”) and earning interest in the form of certain Digital Currencies that are designed to be pegged in value to the US Dollar.  Users of the Digital Currency Wallet may earn interest by uploading Supported Digital Currencies (as set forth in Section 2.3 herein) as collateral for the purpose of receiving interest.
        </Term>
      <Term heading="2.2. Non-Custodial Wallet Services">
        The Digital Currency Wallet is an unhosted and non-custodial Digital Currency wallet.  You control the Digital Currencies held in your Digital Currency Wallet.  At any time, subject to outages, downtime, and other applicable policies, you may withdraw your Digital Currency by sending it to a different blockchain address. When holding your Digital Currencies in the Digital Currency Wallet, Dharma does not maintain exclusive control over your account(s); Dharma controls only one set of electronic private keys associated with your Digital Currency Wallet.  Users are responsible for the risk of loss of their private keys and Dharma may not recover such keys.
        </Term>
      <Term heading="2.3. Supported Digital Currencies">
        Dharma may amend the list of accepted Digital Currency from time to time by revising this Agreement and/or updating the Site. Should Dharma remove any Digital Currency from the list of permitted collateral, deposits already made with such Digital Currency shall remain in force, unless Dharma informs the user otherwise.  As of the date of this Agreement, Dharma supports the Maker Dai stablecoin and Ether and may accept Bitcoin in the future.
        </Term>
      <Term heading="2.4. Operation of Digital Currency Protocols">
        We do not own or control the underlying software protocols which govern the operation of Digital Currency supported on our platform. Generally, the underlying protocols are open source, and anyone can use, copy, modify, and distribute them. We assume no responsibility for the operation of the underlying protocols and we are not able to guarantee the functionality or security of network operations. In particular, the underlying protocols may be subject to sudden changes in operating rules (including “forks”). Any such material operating changes may materially affect the availability, value, functionality, and/or the name of the Digital Currency you store in your Digital Currency Wallet. Dharma does not control the timing and features of these material operating changes. It is your responsibility to make yourself aware of upcoming operating changes and you must carefully consider publicly available information and information concerning the digital currency protocols when determining whether to continue to use a Dharma Account for the affected Digital Currency. You acknowledge and accept the risks of operating changes to Digital Currency protocols and agree that Dharma is not responsible for such operating changes and not liable for any loss of value you may experience as a result of such changes in operating rules.
        </Term>
      <Term heading="2.5. Operation of Lending Protocols">
        We do not own or control the underlying software protocols which govern the operation of the underlying lending protocols currently integrated with the Digital Currency Wallet to generate interest.  Currently the only integrated protocol is the Compound Protocol (“Compound”).  Compound is a smart contract-based digital currency liquidity pool on the Ethereum blockchain. It is based on open source code developed by Compound Labs. Compound is a two-sided marketplace between suppliers and borrowers of virtual currency. As a smart contract system, Compound’s interest rates are set deterministically as a function of the supply and demand for capital in the system.  Users are subject to borrower default risk and investment risk as further disclosed in sections 6.2 and 6.3 herein.
        </Term>
      <Term heading="2.6. Control">
        You control the Digital Currencies held in your Digital Currency Wallet by controlling your private key, which is stored on your device. At any time, subject to outages, downtime, and other applicable policies, you may withdraw your Digital Currency, subject to certain programmatic policy restrictions, by sending it to a different blockchain address.  Dharma does not retain control over electronic private keys associated with blockchain addresses associated with your Digital Currency Wallet.
        </Term>
      <Term heading="2.7. Acknowledgment of Risk">
        You acknowledge that Digital Currency is not subject to protections or insurance provided by the Federal Deposit Insurance Corporation or the Securities Investor Protection Corporation.
        </Term>

      <h2 className="TermSectionHeading">3. DIGITAL CURRENCY PURCHASES AND SALES</h2>
      <Term heading="3.1. Purchase or Sale of Digital Currencies">
        When you purchase (buy) Digital Currency using your Dharma Account, you are purchasing digital currencies directly from Dharma. You can purchase (buy) Digital Currency using your valid bank account via ACH transfer or wire transfer, debit card or credit card.  Your purchase must follow the relevant instructions on the Site. Purchased Digital Currency from Dharma will be deposited in your Digital Currency Wallet within approximately 15 days of funds settling to Dharma’s bank account. However, you will begin to accrue stablecoin interest on such purchased Digital Currency immediately upon our receipt of your purchase instructions.  You can sell certain Supported Digital Currency directly to Dharma and instruct Dharma to deposit the liquidated proceeds into your bank account or debit card. Digital Currency purchases and sales are collectively referred to herein as “Digital Currency Transactions”. If Dharma cannot complete your Digital Currency Transaction for any reason (such as a technical incident), Dharma will notify you of such incomplete transaction.
        </Term>
      <Term heading="3.2. Payment Services Partners">
        Dharma may use a third party payment processor to process any US Dollar payment between you and Dharma, including but not limited to payments in relation to your use of the Digital Currency Transactions.
        </Term>

      <h2 className="TermSectionHeading">4. DIGITAL CURRENCY TRANSFERS</h2>
      <Term heading="4.1. Digital Currency Peer-to-Peer Transfers">
        Your Digital Currency Wallet enables you to send Supported Digital Currency to, and request, receive, and store Supported Digital Currency from, third parties by giving instructions through the Site. Your transfer of Supported Digital Currencies between your other digital currency wallets (including wallets off the Site) and to and from third parties is a “Digital Currency Transfer”.  When you or a third party sends Digital Currency to a Digital Currency Wallet from an external wallet (“Inbound Transfers”), the person initiating the transaction is solely responsible for executing the transaction properly, which may include, among other things, payment of sufficient network or miner’s fees in order for the transaction to be successful. Insufficient network fees may cause an Inbound Transfer to remain in a pending state and may result in delays or loss incurred as a result of an error in the initiation of the transaction.  Dharma has no obligation to assist in the remediation of such transactions.  When you send Digital Currency from your Dharma Account to an external wallet (“Outbound Transfers”), such transfers are executed on chain by you and not under the control of Dharma. You should verify all transaction information prior to submitting them. Dharma shall bear no liability or responsibility in the event you enter an incorrect blockchain destination address. Digital Currency Transfers cannot be reversed once they have been broadcast to the relevant Digital Currency network, although they may be in a pending state, and designated accordingly, while the transaction is processed by network operators. Dharma does not control the Digital Currency network and makes no guarantees that a Digital Currency Transfer will be confirmed by the network.
        </Term>

      <h2 className="TermSectionHeading">5. FEES AND TAXES</h2>
      <Term heading="5.1. Fees">
        By using the Dharma Services you agree to pay all applicable fees. Dharma reserves the right to adjust its pricing and fees and any applicable waivers at any time. We will always notify you of the pricing and fees which apply to your transaction when you authorize the transaction and in each receipt we issue to you. Users may be subject to a network fees (miner fees) to process a Digital Currency Transaction when transferring Digital Currency to and from their Dharma Wallet. Bank fees, credit card and debit card fees charged for any Digital Currency purchase may be netted out of the settled amount of your Digital Currency purchases. You are responsible for paying any additional fees charged by your financial service provider. We will not process a purchase or sale if associated fees exceed the value of the purchase or sale. You may be required to deposit additional money to cover bank, credit card or debit card fees if you desire to complete such a transaction.  In addition, Dharma earns fees on the interest rate spread (i.e., the difference between the prevailing interest rate on the underlying lender protocols and the interest rate that users of the Digital Currency Wallet receive).
        </Term>
      <Term heading="5.2. Taxes">
        It is your sole responsibility to determine whether, and to what extent, any taxes apply to any interest received through the Dharma Services, and to withhold, collect, report and remit the correct amount of tax to the appropriate tax authorities.
        </Term>

      <h2 className="TermSectionHeading">6. RISK FACTORS</h2>
      <Term heading="6.1. Investment Risk">
        Interest rates for the Dharma Services are variable, meaning they can fluctuate even after the user has deposited their Digital Currency. As a result, the user may earn lower interest than the interest rate reflected on the Site when first using a Dharma Account. Similarly, when using the Digital Currency Wallet, the user may be responsible for paying a much higher interest rate than when the user first borrowed Digital Currency through the Dharma Services. Dharma is not responsible for these interest rate fluctuations, which are based on a pre-set formula that Compound manages.
        </Term>
      <Term heading="6.2. Borrower Default Risk">
        When using a Dharma Account, users fund a liquidity pool via Compound from which other users may borrow which has certain borrower default risk. When borrowing from that liquidity pool, borrowers must post collateral, the value of which at the time of borrowing is greater than the value of the Digital Currency they are borrowing (i.e., borrowers are “over-collateralized”). Nevertheless, if the value of the collateral that borrowers have posted rapidly falls, there may be insufficient residual value of the collateral value remaining to repay the loans these borrowers have taken, and in turn the user of a Dharma Account may lose some or all of the user’s initial amounts uploaded to the user’s Dharma Account and/or the user’s expected interest.
      </Term>
      <Term heading="6.3. Interest Rate Risk">
        When using your Dharma Account, note that interest rates on Compound are variable, meaning they can fluctuate even after you have deposited money or taken out a loan. This means that as a depositor you may earn less than the interest rate you saw at the time you deposited, or that as a borrower you will be responsible for paying a much higher interest rate than you saw when you first borrowed money. Dharma is not responsible for these interest rate fluctuations, which are based on a pre-set formula that Compound manages. Further, the interest rates reflected on this page are as of the current date and time may change at any time, before or after the account is opened on Dharma.
        </Term>
      <Term heading="6.4. No Insurance">
        Digital currency is not legal tender, is not backed by the government, and digital currency accounts and value balances on Dharma are not subject to Federal Deposit Insurance Corporation or Securities Investor Protection Corporation protections. Dharma is not a bank and does not offer fiduciary services.
      </Term>
      <Term heading="6.5. New Technical Risk">
        Both the Dharma software and the Compound software used for your Dharma Account are new. While this software has been extensively tested, the software used for the Dharma Services is still relatively new and could have bugs or security vulnerabilities. Further, the software is still under development and may undergo significant changes over time that may not meet users’ expectations.
        </Term>
      <Term heading="6.6. Risk of Reliance on Third Parties">
        The Dharma Services rely in whole or partly, on third party software and the continued development and support of third parties. There is no assurance or guarantee that those third parties will maintain their support of their software, which might have a material adverse effect on the Dharma Services.
      </Term>
      <Term heading="6.7. Information Security Risk">
        Digital Currency and use of the Dharma Services may be subject to expropriation and/or theft. Hackers or other malicious groups or organizations may attempt to interfere with the Dharma Services in a variety of ways, including, but not limited to, malware attacks, denial of service attacks, consensus-based attacks, Sybil attacks, smurfing and spoofing. Furthermore, because the Ethereum and Compound platform rest on open source software, there is the software underlying the Dharma Services may contain intentional or unintentional bugs or weaknesses which may negatively affect the Dharma Services or result in the loss of user’s Digital Currency, the loss of user’s ability to access or control their Dharma Account. In the event of such a software bug or weakness, there may be no remedy and users are not guaranteed any remedy, refund or compensation.
      </Term>

      <h2 className="TermSectionHeading">7. SITE AVAILABILITY AND ACCURACY</h2>
      <Term heading="7.1. Access and Availability">
        Access to the Dharma Services may become degraded or unavailable during times of significant volatility or volume. This could result in the inability to buy or sell for periods of time and may also lead to support response time delays. Although we strive to provide you with excellent service, we do not guarantee that the Site or the Dharma Services will be available without interruption and we do not guarantee that requests to accept or borrow Digital Currency in connection with the Dharma Services will be successful.
        </Term>
      <Term heading="7.2. Site Accuracy">
        Although we intend to provide accurate and timely information on the Site, the Site (including, without limitation, the content may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may, to the extent permitted by applicable law, be changed or updated from time to time without notice, including without limitation information regarding our policies, products and services. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on the Site are your sole responsibility and we shall have no liability for such decisions. Links to third party materials (including without limitation any websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any such third party materials accessible or linked to from the Site.
      </Term>

      <h2 className="TermSectionHeading">8. CONSENT TO ELECTRONIC DISCLOSURES AND SIGNATURES</h2>
      <Term heading="8.1. General">
        Because Dharma operates only on the Internet, whether you choose to use the Service as a borrower, lender or in any other manner, it is necessary for you to consent to transact business with us online and electronically. As part of doing business with us, therefore, we also need you to consent to our providing you certain disclosures electronically, either via our Site or to the email address you provide to us. By agreeing to the , you agree to receive electronically all documents, communications, notices, contracts, and agreements arising from or relating to your use of the Site and Service.
        </Term>
      <Term heading="8.2. Communications">
        By accepting this Agreement, you expressly consent to be contacted by us, our agents, representatives, affiliates, or anyone calling on our behalf for any and all purposes, at any telephone number, or physical or electronic address you provide or at which you may be reached. You agree we may contact you in any way, including SMS messages (including text messages), calls using prerecorded messages or artificial voice, and calls and messages delivered using auto telephone dialing system or an automatic texting system. Notwithstanding the aforementioned, any s will be provided to you electronically through the Site or via email to the email address you provided us. If you require paper copies of any agreements or disclosures, you may sign in to your account on our Site and print the documents desired.
      </Term>
      <Term heading="8.3. Scope of Consent">
        Your consent to receive disclosures and transact business electronically, and our agreement to do so, applies to any transactions to which such disclosures relate, whether between you and Dharma or a third party by and through the Service. Your consent will remain in effect for so long as you are a user and, if you are no longer a user, will continue until such a time as all disclosures relevant to the Services received through the Site.
        </Term>
      <Term heading="8.4. Withdrawing Consent">
        You may withdraw your consent to receive agreements or disclosures electronically by contacting us at the address below. However, once you have withdrawn your consent you will not be able to post loan requests on our Site. If you have a pending loan request on our Site we will terminate it and remove it from our system. If you have already received a loan, all previously agreed to terms and conditions will remain in effect, and we will send agreements and disclosures to your verified home address you must provide us. If you have provided or received one or more loans, all previously agreed to terms and conditions will remain in effect, and we will send disclosures to your home address upon withdrawing your consent of electronic delivery (except with regard to users that are entities). You can contact us via email at support@dharma.io or by calling Support at (415) 562-8474. You may also reach us in writing to us at the following address: Dharma Labs Inc., 527 Howard Street, Fourth Floor, San Francisco, CA 94105, Attention: Support.
      </Term>
      <Term heading="8.5. Change in Your Contact Information">
        You must keep Dharma informed of any change in their email so that you can continue to receive all agreements and disclosures in a timely fashion. If your registered email address changes, you must notify us of the change by sending an email to support@dharma.io or calling (415) 562-8474. You also agree to update your registered residence address and telephone number on the Site if they change. If you are a business or entity user or are acting on behalf of a business or entity, you will keep us informed of any change to your email address, telephone number and primary business address.
      </Term>

      <h2 className="TermSectionHeading">9. INTELLECTUAL PROPERTY, COPYRIGHTS AND IDENTIFYING MARKS</h2>
      <Term heading="9.1. Limited License">
        All content on the Site, including but not limited to designs, text, graphics, pictures, video, information, software, music, sound and other files, and their selection and arrangement (the “Site Content”), are the proprietary property of Dharma with all rights reserved. No Site Content may be modified, copied, distributed, framed, reproduced, republished, downloaded, displayed, posted, transmitted, or sold in any form or by any means, in whole or in part, without Dharma's prior written permission, except as provided in the following sentence and except that the foregoing does not apply to your own User Content (as defined below) that you legally post on the Site. Provided that you are eligible for use of the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Site Content solely for your use in connection with your use of the Site or Service, provided that you keep all copyright or other proprietary notices intact. Except for your own User Content (as defined below), you may not republish Site Content on any Internet, Intranet or Extranet site or incorporate the information in any other database or compilation, and any other use of the Site Content is strictly prohibited. Any use of the Site or the Site Content other than as specifically authorized herein, without the prior written permission of Dharma, is strictly prohibited and will terminate the license granted herein. Such unauthorized use may also violate applicable laws including without limitation copyright and trademark laws and applicable communications regulations and statutes. Unless explicitly stated herein, nothing in this Agreement shall be construed as conferring any license to intellectual property rights, whether by estoppel, implication or otherwise. This license is revocable by us at any time without notice and with or without cause.
  </Term>
      <Term heading="9.2. Trademarks">
        Dharma and other Dharma graphics, logos, designs, page headers, button icons, scripts and service names are registered trademarks, trademarks or trade dress of Dharma in the U.S. and/or other countries. Dharma's trademarks and trade dress may not be used, including as part of trademarks and/or as part of domain names, in connection with any product or service in any manner that is likely to cause confusion and may not be copied, imitated, or used, in whole or in part, without the prior written permission of Dharma. Dharma may, at its sole discretion, limit access to the Site and/or terminate the memberships of any users who infringe any intellectual property rights of Dharma or others.
</Term>
      <Term heading="9.3. Copyright Complaints">
        If you believe that any material on the Site infringes upon any copyright which you own or control, you may send a written notification of such infringement to our Dharma as set forth below:<br />
        <br />
        Attention: Legal Department<br />
        Dharma Labs, Inc.<br />
        527 Howard Street, Fourth Floor<br />
        San Francisco, CA 94105<br />
        (415) 562-8474<br />
        compliance@dharma.io<br /><br />

        To meet the notice requirements under the Digital Millennium Copyright Act, the notification must be a written communication that includes the following:<br /><br />
        <ul>
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
          <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;</li>
          <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material;</li>
          <li>Information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number and, if available, an electronic mail address at which the complaining party may be contacted;</li>
          <li>A statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law; and</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        </ul>
      </Term>
      <Term heading="9.4. Submissions">
        You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or other information about the Site or the Service ("Submissions"), provided by you to Dharma are non-confidential and shall become the sole property of Dharma. Dharma shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to you.
      </Term>

      <h2 className="TermSectionHeading">10. DATA PROTECTION AND SECURITY</h2>
      <Term heading="10.1. Password Security">
        In order to access the Dharma Services, you will be required to provide your name and email address and to create a password. You are responsible for keeping the electronic device through which you access the Dharma Services safe and maintaining adequate security and control of any and all security details that you use to access the Dhama Services. This includes taking all reasonable steps to avoid the loss, theft or misuse of such electronic device and ensuring that such electronic device is both encrypted and password protected. Dharma assumes no responsibility for any loss that you may sustain due to compromise of account login credentials due to no fault of Dharma and/or failure to follow the requirements set out in this Section, or follow or act on any notices or alerts that we may send to you.
      </Term>
      <Term heading="10.2. Loss or Compromise">
        Any loss or compromise of your electronic device or your security details may result in unauthorized access to your Account by third-parties and the loss or theft of Digital Currency held in your Account and any associated accounts, including your linked bank account(s) and credit card(s). You must keep your security details safe at all times. For example, you should not write them down or otherwise make them visible to others.
      </Term>
      <Term heading="10.3. Shared Access">
        You should never allow remote access or share your computer screen with someone else when you are logged on to your Account. Dharma will never under any circumstances ask you for your passwords or to screen share or otherwise seek to access your computer or account. You should not provide your details to any third party for the purposes of remotely accessing your amount unless. Always log into your Account through the Site to review any required actions if you have any uncertainty regarding the authenticity of any communication or notice.
      </Term>
      <Term heading="10.4. Personal Data">
        You acknowledge that we may process personal data in relation to you (if you are an individual), and personal data that you have provided or in the future provide to us in relation to your employees and other associated or other individuals, in connection with this Agreement, or the Dharma Services. Accordingly, you represent and warrant that: (i) your disclosure to us of any personal data relating to individuals other than yourself was or will be made in accordance with all applicable data protection and data privacy laws, and those data are accurate, up to date and relevant when disclosed; (ii) before providing any such personal data to us, you have read and understood our Privacy Policy, which is available here, and, in the case of personal data relating to an individual other than yourself, have (or will at the time of disclosure have) provided a copy of that Privacy Policy (as amended from time to time), to that individual; and (iii) if from time to time we provide you with a replacement version of the Privacy Policy, you will promptly read that notice and provide a copy to any individual whose personal data you have provided to us.
      </Term>
      <Term heading="10.5. Security Breach">
        If you suspect that your Dharma Account or any of your security details have been compromised or if you become aware of any fraud or attempted fraud or any other security incident (including a cyber-security attack) affecting you and/or Dharma (together a “Security Breach”), you must notify Dharma as soon as possible by email free of charge at security@dharma.io or by calling us at (415) 562-8474 and continue to provide accurate and up to date information throughout the duration of the Security Breach. You must take any steps that we reasonably require to reduce, manage or report any Security Breach. Failure to provide prompt notification of any Security Breach may be taken into account in our determination of the appropriate resolution of the matter.
      </Term>
      <Term heading="10.6. Safety and Security of Your Computer and Devices">
        Dharma is not liable for any damage or interruptions caused by any computer viruses or other malicious code that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of a reputable and readily available virus screening and prevention software. You should also be aware that SMS and email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from us.
      </Term>

      <h2 className="TermSectionHeading">11. GENERAL USE, PROHIBITED USE AND TERMINATION</h2>
      <Term heading="11.1. Prohibited Use">
        In connection with your use of the Dharma Services, and your interactions with other users, and third parties you agree and represent you will not engage in any unlawful activity, abusive activity, fraud, gambling, intellectual property infringement, or prohibited activities restricted by card networks (Collectively, “Prohibited Use”) and as further defined on our Prohibited Use Policy.  We reserve the right at all times to monitor, review, retain and/or disclose any information as necessary to satisfy any applicable law, regulation, sanctions programs, legal process or governmental request. We reserve the right to cancel and/or suspend your Dharma Account(s) and/or block transactions or freeze funds immediately and without notice if we determine, in our sole discretion, that your Account is associated with a Prohibited Use.
</Term>
      <Term heading="11.2. Suspension">
        Dharma may suspend and restrict your access to any or all of the Dharma Services if: (i) We are so required by a facially valid subpoena, court order, or binding order of a government authority; (ii) We reasonably suspect you of using your Digital Account in connection with a Prohibited Use; (iii) Use of your Dharma Account is subject to any pending litigation, investigation, or government proceeding and/or we perceive a heightened risk of legal or regulatory non-compliance associated with your Account activity; (iv) Our service partners are unable to support your use; (v) You take any action that Dharma deems as circumventing Dharma's controls, including, but not limited to, opening multiple Dharma Accounts.
</Term>
      <Term heading="11.3. Unclaimed Property">
        The content of the Site and the Services do not constitute an offer to buy or sell or a solicitation of an offer to buy or sell investments, securities, partnership interests, commodities or any other financial instruments; the content or the Site and the Services also do not constitute, and may not be used for or in connection with, an offer or solicitation by anyone in any state or jurisdiction in which such an offer or solicitation is not authorized or permitted, or to any person to whom it is unlawful to make such offer or solicitation.
</Term>
      <Term heading="11.4. Not an Offering of Securities or Commodities">
        The content of the Site and the Services do not constitute an offer to buy or sell or a solicitation of an offer to buy or sell investments, securities, partnership interests, commodities or any other financial instruments; the content or the Site and the Services also do not constitute, and may not be used for or in connection with, an offer or solicitation by anyone in any state or jurisdiction in which such an offer or solicitation is not authorized or permitted, or to any person to whom it is unlawful to make such offer or solicitation.
</Term>
      <Term heading="11.5. No Advice">
        Dharma makes no representation or warranty, express or implied, to the extent not prohibited by applicable law, regarding the advisability of investing in securities, funds, commodity interests, partnership interests or other investments or funding or purchasing loans. The past performance of any investment, loan, security, partnership interest, commodity or financial instrument is not a guide to future performance. Dharma does not offer fiduciary services and is not your agent, advisor or fiduciary.
</Term>

      <h2 className="TermSectionHeading">12. USER FEEDBACK, QUERIES, COMPLAINTS, DISPUTES</h2>
      <Term heading="12.1. Contact Dharma">
        If you have feedback, or general questions, please contact us via our User Support at support@dharma.io. When you contact us please provide us with your name, email address, and any other information we may need to identify you, your Dharma Account(s), and the transaction on which you have feedback or questions. If you believe your account has been compromised, you may also report your claim by calling (415) 562-8474. Dharma requires that all legal documents (including civil subpoenas, complaints, and small claims) be served to our Notice address as set forth in Section 13.7 (Notice).
</Term>
      <Term heading="12.2. Complaints Process">
        If you have a dispute with Dharma (a “Complaint”), you agree to contact Dharma through our support team to attempt to resolve any such dispute amicably. If we cannot resolve the dispute through the Dharma support team, you and Dharma agree to use the Formal Complaint Process set forth below. You agree to use this process before filing any arbitration claim or small claims action. If you do not follow the procedures set out in this Section before filing an arbitration claim or suit in small claims court, we shall have the right to ask the arbitrator or small claims court to dismiss your filing unless and until you complete the following steps.
</Term>
      <Term heading="12.3. Arbitration Agreement">
        If we cannot resolve the dispute through the Formal Complaint Process, you and we agree that any dispute arising out of or relating to this Agreement or the Dharma Services, including, without limitation, federal and state statutory claims, common law claims, and those based in contract, tort, fraud, misrepresentation, or any other legal theory, shall be resolved through binding arbitration, on an individual basis (the “Arbitration Agreement”). Subject to applicable jurisdictional requirements, you may elect to pursue your claim in your local small claims court rather than through arbitration so long as your matter remains in small claims court and proceeds only on an individual (non-class and non-representative) basis. Arbitration shall be conducted in accordance with the American Arbitration Association's rules for arbitration of consumer-related disputes (accessible at https://www.adr.org/sites/default/files/Consumer%20Rules.pdf). This Arbitration Agreement includes, without limitation, disputes arising out of or related to the interpretation or application of the Arbitration Agreement, including the enforceability, revocability, scope, or validity of the Arbitration Agreement or any portion of the Arbitration Agreement. All such matters shall be decided by an arbitrator and not by a court or judge.
</Term>
      <Term heading="12.4. Arbitration Procedures">
        The arbitration will be conducted by a single, neutral arbitrator and shall take place in the county or parish in which you reside, or another mutually agreeable location, in the English language. The arbitrator may award any relief that a court of competent jurisdiction could award and the arbitral decision may be enforced in any court. An arbitrator’s decision and judgment thereon will not have a precedential or collateral estoppel effect. At your request, hearings may be conducted in person or by telephone and the arbitrator may provide for submitting and determining motions on briefs, without oral hearings. To the extent permitted by law, the prevailing party in any action or proceeding to enforce this Agreement, any arbitration pursuant to this Agreement, or any small claims action shall be entitled to costs and attorneys’ fees.
</Term>
      <Term heading="12.5. Waiver of Class Action and Jury Trial">
        YOU AND WE AGREE THAT, BY ENTERING INTO THIS AGREEMENT, THE YOU AND DHARMA ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION. YOU AND WE ACKNOWLEDGE THAT ARBITRATION WILL LIMIT YOUR LEGAL RIGHTS, INCLUDING THE RIGHT TO PARTICIPATE IN A CLASS ACTION, THE RIGHT TO A JURY TRIAL, THE RIGHT TO CONDUCT FULL DISCOVERY, AND THE RIGHT TO APPEAL (EXCEPT AS PERMITTED IN SECTION12.3 OR UNDER THE FEDERAL ARBITRATION ACT).
</Term>
      <Term heading="12.6. Disclaimers">
        None of Dharma's, its parent, any of its affiliates, subsidiaries, providers or their respective officers, directors, employees, agents, independent contractors or licensors (collectively the "Dharma Parties") guarantees the accuracy, adequacy, timeliness, reliability, completeness, or usefulness of any of the Content and the Dharma Parties disclaim liability for errors or omissions in the Content. This Site and all of the Content is provided "as is" and "as available," without any warranty, either express or implied, including the implied warranties of merchantability, fitness for a particular purpose, non-infringement or title. Additionally, there are no warranties as to the results of your use of the Content. The Dharma Parties do not warrant that the Site is free of viruses or other harmful components. This does not affect those warranties which are incapable of exclusion, restriction or modification under the laws applicable to this Agreement. Dharma cannot guarantee and does not promise any specific results from use of the Site and/or the Service to provide or to obtain a loan.
</Term>
      <Term heading="12.7. Availability">
        The Site and the Service may be temporarily unavailable from time to time for maintenance or other reasons. Dharma assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to, or alteration of, user communications. Dharma is not responsible for any problems or technical malfunction of any telephone network or lines, computer online systems, servers or providers, computer equipment, software, failure of email or players on account of technical problems or traffic congestion on the Internet or on the Site or combination thereof, including injury or damage to users or to any other person's computer related to or resulting from participating or downloading materials in connection with the Web and/or in connection with the Service. Under no circumstances will Dharma be responsible for any loss or damage, including any loss or damage to any user Content, financial damages or lost profits, loss of business, or personal injury or death, resulting from anyone's use of the Site or the Service, any User Content or Third Party Content posted on or through the Site or the Service or transmitted to users, or any interactions between users of the Site, whether online or offline.
</Term>
      <Term heading="12.8. Limitation on Liability">
        EXCEPT IN JURISDICTIONS WHERE SUCH PROVISIONS ARE RESTRICTED, IN NO EVENT WILL DHARMA OR ITS DIRECTORS, EMPLOYEES OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING FOR ANY LOST PROFITS OR LOST DATA ARISING FROM YOUR USE OF THE SITE OR THE SERVICE OR ANY OF THE SITE CONTENT OR OTHER MATERIALS ON OR ACCESSED THROUGH THE SITE, EVEN IF DHARMA IS AWARE OR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.<br /><br />

        NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, TO THE EXTENT PERMITTED BY APPLICABLE LAW DHARMA'S LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO DHARMA FOR THE SERVICE DURING THE TERM OF MEMBERSHIP. IN NO CASE WILL DHARMA'S LIABILITY TO YOU EXCEED $1000. YOU ACKNOWLEDGE THAT IF NO FEES ARE PAID TO DHARMA FOR THE SERVICE, YOU SHALL BE LIMITED TO INJUNCTIVE RELIEF ONLY, UNLESS OTHERWISE PERMITTED BY LAW, AND SHALL NOT BE ENTITLED TO DAMAGES OF ANY KIND FROM DHARMA, REGARDLESS OF THE CAUSE OF ACTION.<br /><br />

        CERTAIN FEDERAL AND STATE LAWS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES OR LIMITATIONS ON IMPLIED WARRANTIES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
</Term>
      <Term heading="12.9. Governing Law; Venue and Jurisdiction">
        By visiting or using the Site and/or the Service, you agree that the laws of the state of Delaware, without regard to any principles of conflict of laws that would require or permit the application of the laws of any other jurisdiction, will govern this Agreement. If you obtain a loan, the terms of the loan will be governed by federal laws and the laws of the state of Delaware to the extent not preempted, without regard to any principle of conflicts of laws that would require or permit the application of the laws of any other jurisdiction.
</Term>
      <Term heading="12.10. Indemnity">
        You agree to indemnify and hold Dharma, its subsidiaries and affiliates, and each of their directors, officers, agents, contractors, partners and employees, harmless from and against any loss, liability, claim, demand, damages, costs and expenses, including reasonable attorney's fees, arising out of any dispute with another user of the Site or any third-party. You also agree to indemnify and hold Dharma, its subsidiaries and affiliates and service providers, and each of its or their respective officers, directors, agents, joint venturers, employees and representatives, harmless from any claim or demand (including attorneys' fees and any fines, fees or penalties imposed by any regulatory authority) arising out of or related to your breach of this Agreement or your violation of any law, rule or regulation, or the rights of any third party.
</Term>

      <h2 className="TermSectionHeading">13. GENERAL PROVISIONS</h2>
      <Term heading="13.1. Amendments">
        We may amend or modify this Agreement by posting on the Site or emailing to you the revised Agreement, and the revised Agreement shall be effective at such time. If you do not agree with any such modification, your sole and exclusive remedy is to terminate your use of the Dharma Services and close your account. You agree that we shall not be liable to you or any third party for any modification or termination of the Dharma Services, or suspension or termination of your access to the Dharma Services, except to the extent otherwise expressly set forth herein. If the revised Agreement includes a material change, we will endeavor to provide you advanced notice via our website and/or email before the material change becomes effective.
</Term>
      <Term heading="13.2. Assignment">
        You may not assign any rights and/or licenses granted under this Agreement. We reserve the right to assign our rights without restriction, including without limitation to any Dharma affiliates or subsidiaries, or to any successor in interest of any business associated with the Dharma Services. Any attempted transfer or assignment in violation hereof shall be null and void. Subject to the foregoing, this Agreement will bind and inure to the benefit of the parties, their successors and permitted assigns. In the event that Dharma is acquired by or merged with a third party entity or undergoes a change of control, we reserve the right, in any of these circumstances, to transfer or assign the information we have collected from you as part of such merger, acquisition, sale, or other change of control.
</Term>
      <Term heading="13.3. Force Majeure">
        Dharma shall not be liable for delays, failure in performance or interruption of service which result directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to, significant market volatility, any delay or failure due to any act of God, act of civil or military authorities, act of terrorists, civil disturbance, war, strike or other labor dispute, fire, interruption in telecommunications or Internet services or network provider services, failure of equipment and/or software, other catastrophe or any other occurrence which is beyond our reasonable control and shall not affect the validity and enforceability of any remaining provisions.
</Term>
      <Term heading="13.4. Governing Law; Venue">
        You agree that the laws of the State of Delaware, without regard to principles of conflict of laws, will govern this Agreement and any claim or dispute that has arisen or may arise between you and Dharma, except to the extent governed by federal law. You and Dharma consent to personal jurisdiction on the courts of the State of Delaware.
</Term>
      <Term heading="13.5. Links to Other Web Sites and Content">
        The Site contains (or you may be sent through the Site or the Dharma Services) links to other web sites (“Third Party Sites”), as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, software and other content belonging to or originating from third parties (the “Third Party Content”). Such Third Party Sites and Third Party Content are not investigated, monitored or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third Party Sites accessed through the Site or any Third Party Content posted on the Site, including without limitation the content, accuracy, offensiveness, opinions, reliability or policies of or contained in the Third Party Sites or the Third Party Content. Inclusion of or linking to any Third Party Site or any Third Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third Party Sites, you do so at your own risk and you should be aware that our terms and policies no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any site to which you navigate from the Site.
</Term>
      <Term heading="13.6. No-Waiver">
        The failure of Dharma to exercise or enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision in that or any other instance. If any provision of this Agreement is held invalid, the remainder of this Agreement shall continue in full force and effect. If any provision of this Agreement shall be deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from this Agreement and shall not affect the validity and enforceability of any remaining provisions.
</Term>
      <Term heading="13.7. Notices">
        To give us notice under this Agreement, the user must contact Dharma by facsimile transmission or personal delivery, overnight courier or registered or certified mail to:<br /><br />
        Attention: Legal Department<br />
        Dharma Labs, Inc.<br />
        527 Howard Street, Fourth Floor<br />
        San Francisco, CA 94105
      </Term>
      <Term heading="13.8. Promotions">
        From time to time, Dharma may make available special offers or conduct promotions for qualifying users. Subject to applicable laws, Dharma may establish qualifying criteria to participate in any special promotion its sole discretion. Dharma may revoke any special offer at any time without notice. Dharma shall have no obligation to make special offers available to all users. Dharma makes no recommendation and does not provide any advice about the value or utility of any loan subject to a promotion.
</Term>
      <Term heading="13.9. Severability">
        If any provision of this Agreement shall be determined to be invalid or unenforceable under any rule, law, or regulation of any local, state, or federal government agency, such provision will be changed and interpreted to accomplish the objectives of the provision to the greatest extent possible under any applicable law and the validity or enforceability of any other provision of this Agreement shall not be affected. If such construction is not possible, the invalid or unenforceable portion will be severed from this Agreement but the rest of the Agreement will remain in full force and effect.
</Term>
      <Term heading="13.10 Survival">
        The following provisions of this Agreement shall survive termination of your use or access to the Site: the sections concerning Indemnification, Disclaimer of Warranties, Limitation of Liability, Waiver, Applicable Law and Dispute Resolution, and General Provisions, and any other provision that by its terms survives termination of your use or access to the Site.
</Term>

      <h2 className="TermSectionHeading">APPENDIX A: PROHIBITED USE, PROHIBITED BUSINESS AND CONDITIONAL USE POLICY</h2>
      <Term heading="Prohibited Use">
        You may not use your Dharma Account(s) to engage in the following categories of activity (“Prohibited Uses”). The specific types of use listed below are representative, but not exhaustive. If you are uncertain as to whether or not your use of the Dharma Services involves a Prohibited Use, or have questions about how these requirements apply to you, please contact us at support@dharma.io. By opening a Dharma Account, you confirm that you will not use your Account to do any of the following:<br />
        <ul>
          <li>
            Abusive Activity: Actions which impose an unreasonable or disproportionately large load on our infrastructure, or detrimentally interfere with, intercept, or expropriate any system, data, or information; transmit or upload any material to the Dharma Site that contains viruses, trojan horses, worms, or any other harmful or deleterious programs; attempt to gain unauthorized access to the Site, other Dharma Accounts, computer systems or networks connected to the Dharma Site, through password mining or any other means; use Dharma Account information of another party to access or use the Dharma Site, except in the case of specific Merchants and/or applications which are specifically authorized by a user to access such user's Dharma Account and information; or transfer your account access or rights to your account to a third party, unless by operation of law or with the express permission of Dharma.</li>
          <li>
            Abuse Other Users: Interfere with another individual's or entity's access to or use of any Dharma Services; defame, abuse, extort, harass, stalk, threaten or otherwise violate or infringe the legal rights (such as, but not limited to, rights of privacy, publicity and intellectual property) of others; incite, threaten, facilitate, promote, or encourage hate, racial intolerance, or violent acts against others; harvest or otherwise collect information from the Dharma Site about others, including without limitation email addresses, without proper consent.
          </li>
          <li>
            Fraud: Activity which operates to defraud Dharma, Dharma users, or any other person; provide any false, inaccurate, or misleading information to Dharma.
          </li>
          <li>
            Gambling: Lotteries; bidding fee auctions; sports forecasting or odds making; fantasy sports leagues with cash prizes; internet gaming; contests; sweepstakes; games of chance
          </li>
          <li>
            Intellectual Property Infringement: Engage in transactions involving items that infringe or violate any copyright, trademark, right of publicity or privacy or any other proprietary right under the law, including but not limited to sales, distribution, or access to counterfeit music, movies, software, or other licensed materials without the appropriate authorization from the rights holder; use of Dharma intellectual property, name, or logo, including use of Dharma trade or service marks, without express consent from Dharma or in a manner that otherwise harms Dharma or the Dharma brand; any action that implies an untrue endorsement by or affiliation with Dharma.
          </li>
          <li>
            Unlawful Activity: Activity which would violate, or assist in violation of, any law, statute, ordinance, or regulation, sanctions programs administered in the countries where Dharma conducts business, including but not limited to the U.S. Department of Treasury's Office of Foreign Assets Control ("OFAC"), or which would involve proceeds of any unlawful activity; publish, distribute or disseminate any unlawful material or information.
          </li>
        </ul>
      </Term>

      <Term heading="Prohibited Business">
        You may not use your Dharma Account(s) to engage in the following categories of activity ("Prohibited Use(s)"). The specific types of use listed below are representative, but not exhaustive. If you are uncertain as to whether or not your use of the Dharma Services involves a Prohibited Use, or have questions about how these requirements apply to you, please contact us at support@dharma.io. By opening a Dharma Account, you confirm that you will not use your Dharma Account to do any of the following:
        <ul>
          <li>
            Counterfeit or Unauthorized Goods: Unauthorized sale or resale of brand name or designer products or services; sale of goods or services that are illegally imported or exported or which are stolen.
          </li>
          <li>
            High risk businesses: any businesses that we believe poses elevated financial risk, legal liability, or violates card network or bank policies.
          </li>
          <li>
            Intellectual Property or Proprietary Rights Infringement: Sales, distribution, or access to counterfeit music, movies, software, or other licensed materials without the appropriate authorization from the rights holder.
          </li>
          <li>
            Investment and Credit Services: Securities brokers; mortgage consulting or debt reduction services; credit counseling or repair; real estate opportunities; investment schemes.
          </li>
          <li>
            Multi-level Marketing: Pyramid schemes, network marketing, and referral marketing programs
          </li>
          <li>
            Pseudo-Pharmaceuticals: Pharmaceuticals and other products that make health claims that have not been approved or verified by the applicable local and/or national regulatory body.
          </li>
          <li>
            Regulated Products and Services: Marijuana dispensaries and related businesses; sale of tobacco, e-cigarettes, and e-liquid; online prescription or pharmaceutical services; age-restricted goods or services; weapons and munitions; gunpowder and other explosives; fireworks and related goods; toxic, flammable, and radioactive materials; products and services with varying legal status on a state-by-state basis.
          </li>
          <li>
            Restricted Financial Services: Check cashing, bail bonds and collections agencies.
          </li>
          <li>
            Substances designed to mimic illegal drugs: Sale of a legal substance that provides the same effect as an illegal drug (e.g., salvia, kratom).
          </li>
          <li>
            Unfair, predatory or deceptive practices: Investment opportunities or other services that promise high rewards; Sale or resale of a service without added benefit to the buyer; resale of government offerings without authorization or added value; sites that we determine in our sole discretion to be unfair, deceptive, or predatory towards consumers.
          </li>
        </ul>
      </Term>
      <Term heading="Conditional Use">
        Express written consent and approval from Dharma must be obtained prior to using Dharma Services for the following categories of business and/or use ("Conditional Uses"). Consent may be requested by contacting us at support@dharma.io. Dharma may also require you to agree to additional conditions, make supplemental representations and warranties, complete enhanced on-boarding procedures, and operate subject to restrictions if you use Dharma Services in connection with any of following businesses, activities, or practices:
      <ul>
          <li>
            Money Services: Money transmitters, Digital Currency transmitters; currency or Digital Currency exchanges or dealers; gift cards; prepaid cards; sale of in-game currency unless the merchant is the operator of the virtual world; act as a payment intermediary or aggregator or otherwise resell any of the Dharma Services.
        </li>
          <li>
            Games of Skill: Games which are not defined as gambling under this Agreement or by law, but which require an entry fee and award a prize.
        </li>
          <li>
            Charities: Acceptance of donations for nonprofit enterprise.
        </li>
          <li>
            Religious/Spiritual Organizations: Operation of a for-profit religious or spiritual organization.
        </li>
        </ul>
      </Term>

      <h2 className="TermSectionHeading">APPENDIX B: STATE LICENSE DISCLOSURES</h2>
      <Term>
        Dharma maintains licenses to engage in money transmission activities in many states, and these licenses may impact our provision and your use of certain Services depending on where you live. Dharma's licenses and corresponding required disclosures can be found on the Dharma Licenses page, which is incorporated by reference.<br /><br />
      If you live in the following jurisdictions, we are required to provide you with the following information:
</Term>
      <Term heading="Washington">
        If you have a complaint, first contact the consumer assistance division of https://support.dharma.io or (415) 562-8474, and if you still have an unresolved complaint regarding the company’s money transmission activity, please contact the Washington State Department of Financial Institutions, Division of Consumer Services using one of the following methods:
      <ul>
          <li>
            File a complaint online, mail or fax: https://dfi.wa.gov/consumers/loan-complaints
        </li>
          <li>
            Call us: 1-877-RING DFI (1-877-746-4334)
        </li>
          <li>
            Email us: CSEnforceComplaints@dfi.wa.gov
        </li>
        </ul>
      </Term>

      <h2 className="TermSectionHeading">APPENDIX C: E-SIGN DISCLOSURES AND CONSENT</h2>
      <Term>
        This policy describes how the Company delivers communications to you electronically. The Company may amend this policy at any time by providing a revised version on our website. The revised version will be effective at the time we post it. We will provide you with prior notice of any material changes via our website.
</Term>
      <Term heading="Electronic Delivery of Communications">
        You agree and consent to receive electronically all communications, agreements, documents, notices and disclosures (collectively, "Communications") that we provide in connection with your Dharma Account(s) and your use of the Dharma. Communications include:
        <ul>
          <li>
            Terms of use and policies you agree to (e.g., the Dharma User Agreement and Privacy Policy), including updates to these agreements or policies;
          </li>
          <li>
            Account details, history, transaction receipts, confirmations, and any other Account or transaction information;
          </li>
          <li>
            Legal, regulatory, and tax disclosures or statements we may be required to make available to you; and
          </li>
          <li>
            Responses to claims or customer support inquiries filed in connection with your Account.
          </li>
        </ul>
      </Term>
      <Term>
        The will provide these Communications to you by posting them on the Dharma website, emailing them to you at the primary email address listed in your Dharma profile, communicating to you via instant chat, and/or through other electronic communication such as text message or mobile push notification.
</Term>
      <Term heading="Hardware and Software Requirements">
        In order to access and retain electronic Communications, you will need the following computer hardware and software:
      <ul>
          <li>
            A device with an Internet connection;
        </li>
          <li>
            A current web browser that includes 128-bit encryption (e.g., Internet Explorer version 9.0 and above, Firefox version 3.6 and above, Chrome version 31.0 and above, or Safari 7.0 and above) with cookies enabled;
        </li>
          <li>
            A valid email address (your primary email address on file with the Company); and
        </li>
          <li>
            Sufficient storage space to save past Communications or an installed printer to print them.
        </li>
        </ul>
      </Term>
      <Term heading="How to Withdraw Your Consent">
        You may withdraw your consent to receive Communications electronically by contacting us at support@dharma.io. If you fail to provide or if you withdraw your consent to receive Communications electronically, the Company reserves the right to immediately close your Account or charge you additional fees for paper copies.
</Term>
      <Term heading="Updating your Information">
        It is your responsibility to provide us with a true, accurate and complete e-mail address and your contact information, and to keep such information up to date. You understand and agree that if the Company sends you an electronic Communication but you do not receive it because your primary email address on file is incorrect, out of date, blocked by your service provider, or you are otherwise unable to receive electronic Communications, the Company will be deemed to have provided the Communication to you.<br /><br />

        You may update your information by logging into your account and visiting settings or by contacting our support team at support@dharma.io.
      </Term>
    </div >
  );
};

export default Terms;