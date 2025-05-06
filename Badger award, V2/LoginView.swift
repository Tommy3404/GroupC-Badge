//
//  LoginView.swift
//  Badger award, V2
//
//  Created by Zachary Clayville on 5/6/25.
//

import SwiftUI

struct LoginView: View {
    @State private var username = ""
    @State private var isLoggedIn = false

    var body: some View {
        if isLoggedIn {
            MainTabView()
        } else {
            VStack(spacing: 20) {
                Text("Logo")
                    .font(.largeTitle)
                Text("Title")
                    .font(.title)

                TextField("Username", text: $username)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding(.horizontal)

                Button("Log In") {
                    isLoggedIn = true
                }
                .padding()
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(10)

                Text("Or")

                Button("Sign Up") {
                    // Future logic
                }
            }
            .padding()
        }
    }
}

#Preview {
    LoginView()
}
