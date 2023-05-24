using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GymApp.Migrations.GymUser
{
    /// <inheritdoc />
    public partial class seedDefaultRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "11872a56-e770-461a-9842-3fb36064d7d2", "fff74d4a-7e12-4e69-9f17-ad10bb2813a3", "Receptionist", "RECEPTIONIST" },
                    { "1b665734-6922-4054-a023-be57fea22554", "6a844c35-a831-45e8-9c00-fe7c4b203a90", "Admin", "ADMIN" },
                    { "2d503dc1-0a19-48d9-94b0-e196aa1dc255", "684ccb52-9e84-40a5-a217-5652637af3d6", "Customer", "CUSTOMER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "11872a56-e770-461a-9842-3fb36064d7d2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1b665734-6922-4054-a023-be57fea22554");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2d503dc1-0a19-48d9-94b0-e196aa1dc255");
        }
    }
}
