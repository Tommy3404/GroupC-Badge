//
//  MainTabView.swift
//  Badger award, V2
//
//  Created by Zachary Clayville on 5/6/25.
//

import SwiftUI

struct MainTabView: View {
    var body: some View {
        TabView {
            SettingsView()
                .tabItem {
                    Label("Settings", systemImage: "gear")
                }

            LessonProgressView()
                .tabItem {
                    Label("Home", systemImage: "house")
                }

            BadgesView()
                .tabItem {
                    Label("Badges", systemImage: "star")
                }
        }
    }
}

#Preview {
    MainTabView()
}
