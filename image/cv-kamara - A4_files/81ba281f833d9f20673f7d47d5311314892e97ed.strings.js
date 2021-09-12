(function() {
 const messages = JSON.parse("{\"+V/b6w\":\"<Bold>Pay for 1, get {0} free.</Bold> Invite {1, plural, one {1 more person} other {# more people}} to team up with you on {2} for free. <Anchor>Learn more.</Anchor>\",\"yqEzBw\":\"You still have {0, plural, one {1 day} other {# days}} left in your trial.  Invite as many people as you want during your trial for free – you won’t be charged until {1, date, long}.\",\"P5UTqA\":\"Creating a free class makes it easier to share designs and folders. Upgrade to Canva Pro to unlock all class functionality and benefits.\",\"uDaRhg\":\"Due today ({0}−{1} seats, no {2, plural, one {1 day} other {# day}} trial)\",\"X9rL5g\":\"First instalment due today ({0, plural, one {# seat} other {# seats}}, no {1, plural, one {1 day} other {# day}} trial)\",\"5DVKvQ\":\"Maybe later\",\"6GrTRw\":\"You've successfully switched to a yearly plan. You will automatically be charged on {0, date, long}.\",\"al8NHw\":\"Your {0} plan will end on {1, date, long}. Team members added before that date will incur a prorated charge.\",\"ppKqqw\":\"Teacher\",\"dKq56Q\":\"Each new team member will cost an extra {0} a month. You can add users for free during your free trial period – you'll only get charged once your subscription begins.\",\"MhlE2w\":\"Canva for Education allows you to share designs and folders, and easily collaborate with your entire class.\",\"alIbLA\":\"Continue\",\"ibdAqQ\":\"Invite class members for free\",\"SeE9cQ\":\"Switch to yearly\",\"+VD3rQ\":\"Can create design templates for your brand and edit your Brand Kit. Invite your designers and we’ll send them special tips to get started.\",\"o8n8qg\":\"Next step\",\"oOa6tQ\":\"Your invite couldn’t be sent because your team has reached its seat limit. You can still share your design.\",\"DKTFuQ\":\"Each team member will cost an extra {0} a month (paid annually), except during offer periods where the discounted price will be applied.\",\"vLmgdQ\":\"Each new team member will cost an extra <span class=\\\"{0}\\\">{1}</span> {2}/month until {3, date, long}.\",\"i4oD9w\":\"Each new team member will cost an extra {0} until {1, date, long} then {2}/month (paid annually) or {3}/month (paid monthly).\",\"wm1/Hg\":\"Switch to {0}/year\",\"ssaGVQ\":\"Due today ({0}−{1} seats)\",\"s4ykxA\":\"Each new team member will cost an extra {0} a month.\",\"L0c4pw\":\"We can't add your team members right now. Please try using the <Anchor>Team's page</Anchor> to invite your team members.\",\"H1NFQg\":\"Your {0} plan will end on {1, date, long}. Team members added before that date will incur a prorated charge.\",\"0jCCmw\":\"Update your payment method\",\"Rudl6g\":\"Add extra team members for {0} per person {1, plural, one {per year} other {for # years}}.\",\"7EA9TA\":\"Each new team member will cost an extra {0} a month (paid annually).\",\"pqVUjg\":\"Request invitations to {0}\",\"su9oDg\":\"{0} additional seats\",\"bHzFTw\":\"Send invitations\",\"tIdwhA\":\"Due today ({0, plural, one {# seat} other {# seats}}, no {1, plural, one {1 day} other {# day}} trial)\",\"i7SZsA\":\"Due {0, date, long}\",\"r4BeEw\":\"Each new team member will cost an extra {0} a month (paid annually), or {1} a month (paid monthly).\",\"kl5lig\":\"Can create and share designs with both the teacher and the rest of the class.\",\"U68rAA\":\"Invite team members for free\",\"mi6XbA\":\"Student\",\"647j4Q\":\"Can manage your team members, create design templates for your brand and edit your Brand Kit.\",\"kdVlPA\":\"<b>Missing someone?</b> Contact your district administrator to get them invited.\",\"Lms1HA\":\"Each team member will cost an extra {0} a month, except during offer periods where the discounted price will be applied.\",\"ociDzA\":\"Owner\",\"wFQJFg\":\"First instalment due {0, date, long} ({1, plural, one {# seat} other {# seats}})\",\"RIZ2aA\":\"Can manage the class and create templates for the class to use.\",\"cZQOcg\":\"Invitation sent to {0}\",\"iF85HQ\":\"Our recent attempts to charge you have failed. <strong>Please update your payment method to continue using {0}.</strong>\",\"S7Rg8A\":\"Here's where you'll find everyone in your school district. Your colleagues and students should all be here.\",\"5RRLUQ\":\"Includes tax of\",\"8SpiZQ\":\"Each team member will cost an extra {0} a month, except during offer periods where the discounted price will be applied. You can add users for free during your free trial period – you'll only get charged once your subscription begins.\",\"5gvbAQ\":\"Teams of up to {0, plural, one {1 person} other {# people}} cost {1} per month, then {2} per month for each additional member.\",\"f+0K/Q\":\"We had trouble fetching your account details. Try again in a few moments and <a href=\\\"{0}\\\" data-anchor-id=\\\"contact-support\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">contact support</a> if the problem persists.\",\"Mu98yg\":\"Add extra team members for {0} per person {1, plural, one {per month} other {for # months}}, until {2, date, long}. Then {3} per person, {4, plural, one {per month} other {for # months}}.\",\"trYS1w\":\"Add extra team members for {0} per person {1, plural, one {per month} other {for # months}}, until {2, date, long}. Then {3} per person, {4, plural, one {per year} other {for # years}}.\",\"mb4HSQ\":\"Creating a class makes it easier to share designs and folders.\",\"aJK7Dg\":\"Canva has experienced an error and couldn't send your invites. Please try again later.\",\"FdI5Ew\":\"Invite team members\",\"b5/O6A\":\"There was an error updating your payment method. Please try again in a few minutes.\",\"JQKh3g\":\"Member\",\"1s5jWA\":\"An error occurred while trying to change your subscription. Try again in a few moments and <a href=\\\"{0}\\\" data-anchor-id=\\\"contact-support\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">contact support</a> if the problem persists.\",\"ORFCGg\":\"Add extra team members for {0} per person {1, plural, one {per month} other {for # months}}.\",\"dUyo7A\":\"{0} seat plan\",\"ph1X8Q\":\"Due today (no {0, plural, one {1 day} other {# day}} trial)\",\"b+6C9Q\":\"Each new team member will cost an extra {0} until {1, date, long} then {2}/month.\",\"J6pMGQ\":\"Prorated means you only get charged for the remainder of the month, instead of the total month.\",\"2x597w\":\"Teams of up to {0, plural, one {1 person} other {# people}} for a flat price of {1} per month.\",\"wovkZQ\":\"Plan ends\",\"MuVsmQ\":\"Ask your teacher to invite people.\",\"y/X4yA\":\"Each new team member will cost an extra <span class=\\\"{0}\\\">{1}</span> {2}/month (paid annually) until {3, date, long}.\",\"1aILqA\":\"Due {0, date, long} ({1, plural, one {# seat} other {# seats}})\",\"JbhSzw\":\"Creating a free team makes it easier to share designs and folders.\",\"ar8EuQ\":\"Request invitations to {0}\",\"wXr0Bw\":\"Your {0} plan is currently paused until {1, date, long}.\",\"qacLuw\":\"Add another\",\"p2Xk1w\":\"Your request will be sent to your administrators.\",\"2AShqg\":\"Can create templates for the class to use.\",\"Zft0hA\":\"Your school district\",\"QQ53wA\":\"Due today *(prorated total)\",\"aQgpBg\":\"Due {0, date, long} ({1}−{2} seats)\",\"cvrPsw\":\"Add extra team members for {0} per person {1, plural, one {per year} other {for # years}}, until {2, date, long}. Then {3} per person, {4, plural, one {per month} other {for # months}}.\",\"o705zg\":\"Ask your team administrator or owner to invite people.\",\"NqGiUA\":\"*When someone accepts your team invitation, you’ll be charged for the remainder of the year. You’ll then return to your existing billing cycle at {0}/year.\",\"5lI3qw\":\"A team of up to 5 members costs {0}/month, any additional members will cost {1}/month per member (paid yearly).\",\"AU4rQg\":\"First instalment due {0, date, long} ({1}−{2} seats)\",\"DNSIiA\":\"Due today <DarkGreen>({0, plural, one {1 day} other {# days}} free)</DarkGreen>\",\"EXjQHQ\":\"Can manage the settings of the school district.\",\"P6omag\":\"{0, plural, one {request} other {# requests}} sent\",\"qnTkyg\":\"{0}-{1} seat plan\",\"9OlVXg\":\"Invite team members\",\"PNjboA\":\"Can create and share designs. Perfect for anyone who needs to make branded designs – especially your colleagues in marketing, social media & sales.\",\"SEM4nQ\":\"Canva teams allow you to easily share designs and folders, share colour palettes in your Brand Kit, and collaborate more efficiently.\",\"LDnkQA\":\"*When someone accepts your team invitation, you’ll be charged for the remainder of the month. You’ll then return to your existing billing cycle at {0}/month.\",\"pjzHbQ\":\"Add extra team members for {0} per person {1, plural, one {per year} other {for # years}}, until {2, date, long}. Then {3} per person, {4, plural, one {per year} other {for # years}}.\",\"ZWq2Xw\":\"Each team member will cost an extra {0} a month (paid annually), except during offer periods where the discounted price will be applied. You can add users for free during your free trial period – you'll only get charged once your subscription begins.\",\"9IDJxg\":\"Subscribed with {0}•{1}.\",\"2QORwA\":\"Template Designer\",\"vOqitw\":\"Each new team member will cost an extra {0} a month (paid annually), or {1} a month (paid monthly). You can add users for free during your free trial period – you'll only get charged once your subscription begins.\",\"2M/vTw\":\"Administrator\",\"CGmyMw\":\"A team of up to 5 members costs {0}/month, any additional members will cost {1}/month per member.\",\"WKdJiA\":\"Due today\",\"8+6WKQ\":\"First instalment due today ({0, plural, one {# seat} other {# seats}})\",\"L7rfJA\":\"Each new team member will cost an extra {0} a month (paid annually). You can add users for free during your free trial period – you'll only get charged once your subscription begins.\",\"mJ2OaA\":\"Administrator\",\"Bbc3Ig\":\"First instalment due {0, date, long}\",\"u6KZgw\":\"{0, plural, one {invitation} other {# invitations}} sent\",\"mSSFjA\":\"{0, date, long}\",\"O0p16w\":\"Send requests\",\"dk/Ozw\":\"Extra team members will add a charge to your team's plan\",\"TDIN1w\":\"Creating a free team makes it easier to share designs and folders.\",\"9wyqSQ\":\"First instalment due today\",\"kV0ytw\":\"Retry\",\"+y8dpQ\":\"Prorated means you only get charged for the remainder of the year, instead of the total year.\",\"RsovOA\":\"Send invitations\",\"j/VGlg\":\"Success! You've resubscribed to {0}. You will be automatically charged on {1, date, long}\",\"5I2yaQ\":\"That's you! You're already in this team. Until you clone yourself, you can't be in here twice.\",\"7ajIEw\":\"Teacher\",\"C+3aQA\":\"Enter email address...\",\"uEuIug\":\"Creating a free team makes it easier to share designs and folders. Upgrade to Canva Pro to unlock all team functionality and benefits.\",\"NJdo6g\":\"An error occured while processing your payment. Please try again or contact support if the problem persists.\",\"bqgs0g\":\"Yearly total (12 month instalments)\",\"hqkqUw\":\"<b>Want to set up your classes?</b> Use the groups tab above.\",\"vJztTw\":\"Keep {0}\",\"SRmt9A\":\"It is your responsibility to get parental permission for students under the age of 13 to use Canva for Education, in accordance with the Children's Online Privacy Protection Act (if applicable) and our <b><a target=\\\"_blank\\\" href=\\\"https://about.canva.com/privacy-policy/\\\" rel=\\\"noopener\\\">Privacy Policy</a></b>.\",\"ROybUg\":\"Teams of up to {0, plural, one {1 person} other {# people}} cost {1} per year, then {2} per year for each additional member.\",\"gT0Hpg\":\"{0} doesn't look like an email address. Try again?\",\"v1QG1A\":\"Each new team member will cost an extra {0} until {1, date, long} then {2}/month (paid annually).\",\"QHFR9g\":\"Due today ({0, plural, one {# seat} other {# seats}})\",\"53pGvQ\":\"You have {0, plural, one {1 unused seat} other {# unused seats}} on your team. Invite {0, plural, one {1 person} other {# people}} to team up with you on {1} at no extra cost.\",\"FhYpPg\":\"Your discounted {0} plan will start on {1, date, long}. Any additional seats you add now will automatically have the discount applied to it on {1, date, long}\",\"67SqQQ\":\"Each new team member will cost an extra amount based on <a href=\\\"{0}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">your subscriptions</a>.\",\"54h/OA\":\"No thanks\",\"K3/aTg\":\"You’re on a discounted {0} plan that ends on {1, date, long}.\",\"1vPhWA\":\"First instalment due today (no {0, plural, one {1 day} other {# day}} trial)\",\"QQDypQ\":\"Teams of up to {0, plural, one {1 person} other {# people}} for a flat price of {1} per year.\",\"QsJPPg\":\"Invite class members\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["en-GB"] = strings["en-GB"] ? Object.assign(strings["en-GB"], messages) : messages;
})();