# React Email Integration in Next.js with Resend

This project demonstrates the integration of React Email in a Next.js project, allowing you to create and send emails using React components and an API route. It uses Resend, which is the email API for developers.

> [!IMPORTANT]
> **Before you start with the app, ensure you have an active account on Resend and have obtained your API key. Replace `'RESEND_API_KEY'` in `/src/app/api/email/route.ts` with your personalized API key.**

Explore a collection of pre-designed and customizable email templates built with React, which are specifically made to be compatible with various email clients and devices, ensuring consistent rendering and optimal user experience.

## Features

- **Responsive Design**: All templates are responsive and optimized for different screen sizes, providing a seamless experience across devices.
- **Easy Customization**: Each template is built using React components, making it easy to customize the content, styles, and layout to match your brand.
- **Reusable Components**: The templates are structured using reusable components, allowing for modular design and easy maintenance.
- **Cross-client Compatibility**: The templates are thoroughly tested to ensure compatibility with major email clients such as Gmail, Outlook, Yahoo Mail, and more.
- **Accessibility**: Accessibility best practices are followed to ensure that the templates are inclusive and usable for everyone.
- **Dynamic Data Binding**: The integration with Resend's API allows you to dynamically bind data to your email templates. This enables you to personalize each email by populating fields such as recipient name, order details, and more.
- **Effortless Sending**: With Resend's powerful API, sending emails becomes a breeze. You can trigger email sending directly from your Next.js application, eliminating the need for manual intervention.
- **Event Tracking**: Resend's API also supports event tracking for your emails. You can monitor when emails are delivered, opened, and clicked, enabling you to gather valuable insights into the effectiveness of your communication.
- **Secure and Reliable**: Resend ensures the security of your email communication through encryption and secure transmission protocols. You can rely on the service for timely and accurate email delivery.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/sinisaandrijevic/react-email`
2. Navigate to the project directory: `cd react-email-starter`
3. Install dependencies: `npm install`
4. Configure Resend API: Obtain your Resend API key from https://resend.com and replace `'RESEND_API_KEY'` in `/src/app/api/email/route.ts` with your actual API key.
5. Customize Email Templates: Explore the `/emails` directory to find pre-designed email templates. Modify the templates according to your branding and content needs.
6. Create Email Components: Utilize the components in the `src/components` directory to create new email templates or modify existing ones.
7. Implement Sending Logic: Check out the example in `api/email/route.ts` to see how to send emails using Resend's API. Customize the logic as needed for your use case.
8. Run the Development Server: Start the Next.js development server with `npm run dev` and navigate to `http://localhost:3000` in your browser.
9. Test and Iterate: Test your email templates, sending functionality, and tracking features. Make iterations based on your testing results.

## Documentation

For detailed instructions on using Resend's API, refer to the official documentation at https://resend.com/docs/introduction.

## Contributing

Contributions to this project are welcome and encouraged. If you find any issues or want to add new features, please open a pull request on GitHub.

## License

This project is licensed under the MIT License.

---

**Note:** This project is a demonstration of email integration using React and Resend. Make sure to handle sensitive data and credentials securely when deploying to production environments.

If you have any questions, suggestions, or feedback, please feel free to contact me at andrijevicsinisa2006@gmail.com.
