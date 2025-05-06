//
//  BadgesView.swift
//  Badger award, V2
//
//  Created by Zachary Clayville on 5/6/25.
//

import SwiftUI

struct BadgesView: View {
    let badgeNames = [
        "CHALLENGE STARTER",
        "COMMUTL HELPER",
        "CREATVIVE THINKER",
        "KNOWLEDGE EXPLORER",
        "MASTER OF TASKS",
        "SCIENCE ADVENTURER",
        "SPEED RUNNER",
        "TECH TRAIBLAZER",
        "ULTMATE ACHIEVER"
    ]

    var body: some View {
        VStack {
            Text("What you have earned!")
                .font(.headline)
                .padding(.top)

            LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 3), spacing: 20) {
                ForEach(badgeNames, id: \.self) { badge in
                    Image(badge)
                        .resizable()
                        .scaledToFit()
                        .frame(width: 80, height: 80)
                        .background(Color.gray.opacity(0.2))
                        .cornerRadius(12)
                }
            }
            .padding()
        }
    }
}

#Preview {
    BadgesView()
}
